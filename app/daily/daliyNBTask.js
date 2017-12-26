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
import wds from '../public/css/css-window-single';
import Modal from 'react-native-modal'
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';
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

    //客户
    daliyVisitDescribe() {
        this.props.navigation.navigate('DaliyVisitDescribe')
    }

    //客户
    dailyRemind() {
        this.props.navigation.navigate('DailyRemind')
    }

    constructor(props) {
        super(props);
        this.state = {
            value: false,
            dobText: '',
            dobDate: null,
            journeyText: '',
            journeyDate: null,
        };
    }

    /**
     * DOB textbox click listener
     */
    onDOBPress = () => {
        let dobDate = this.state.dobDate;

        if (!dobDate || dobDate == null) {
            dobDate = new Date();
            this.setState({
                dobDate: dobDate
            });
        }

        //To open the dialog
        this.refs.dobDialog.open({
            date: dobDate,
            maxDate: new Date() //To restirct future date
        });

    }

    /**
     * Call back for dob date picked event
     *
     */
    onDOBDatePicked = (date) => {
        this.setState({
            dobDate: date,
            dobText: moment(date).format('DD-MMM-YYYY')
        });
    }


    /**
     * Journey date textbox click listener
     */
    onJourneyDatePress = () => {
        let journeyDate = this.state.journeyDate;

        if (!journeyDate || journeyDate == null) {
            journeyDate = new Date();
            this.setState({
                journeyDate: journeyDate
            });
        }

        //To open the dialog
        this.refs.journeyDialog.open({
            date: journeyDate,
            minDate: new Date() //To restirct past date
        });

    }

    /**
     * Call back for journey date picked event
     *
     */
    onJourneyDatePicked = (date) => {
        this.setState({
            journeyDate: date,
            journeyText: moment(date).format('YYYY-MM-DD')
        });
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
                    <Text>新建拜访</Text>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.finish()}}>
                        <Text style={[com.cr,com.fs12]}>完成</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[com.flex]}>
                    <View style={[com.pdlr15,com.bgcfff,com.mgt5,com.btwc]}>
                        <TextInput
                            style={[com.bgcfff,com.bbwc,com.pdtb0,{height: 26,width:screenW,}]}
                            underlineColorAndroid={'transparent'}
                            placeholder='任务名称'
                            secureTextEntry={false}
                            multiline={false}
                            placeholderTextColor={'#bdbdbd'}
                            onChangeText={(ss) => this.setState({ss})} value={this.state.ss}
                            />
                    </View>
                    <View style={[com.mgb5]}>
                        <TextInput
                            style={[com.bgcfff,com.bbwc,com.pdt5l15,{height: 26,width:screenW,}]}
                            underlineColorAndroid={'transparent'}
                            placeholder='地点'
                            secureTextEntry={false}
                            multiline={false}
                            placeholderTextColor={'#bdbdbd'}
                            onChangeText={(ss) => this.setState({ss})} value={this.state.ss}
                            />
                    </View>
                    <TouchableOpacity style={[]}
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

                    <View style={[com.row,com.aic,com.jcsb,com.bgcfff,com.pdt5l15,com.mgb1]}>
                        <Text>全天</Text>
                        <Switch
                            style={[]}
                            //动态改变value
                            value={this.state.value}
                            //当切换开关室回调此方法
                            onValueChange={(value)=>{this.setState({value: value})}}
                            />
                    </View>

                    <View style={[com.row,com.jcsb,com.bgcfff]}>
                        <View style={[com.jcc,com.pd15,com.aic,com.brwc]}>
                            <Text>起止时间</Text>
                        </View>
                        <View style={[com.flex,com.ww7,]}>
                            <View style={[com.pdtb10,com.pdlr10,com.row,com.bbwc,com.aic,com.jcfe]}>
                                <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)}>
                                    <View style={[com.row,com.jcsb,com.pdtb5,com.pdr9]}>
                                        <Text style={[com.w100]}>{this.state.journeyText}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                            </View>
                            <View style={[com.pdtb10,com.pdlr10,com.row,com.bbwc,com.aic,com.jcfe]}>
                                <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)}>
                                    <View style={[com.row,com.jcsb,com.pdtb5,com.pdr9]}>
                                        <Text style={[com.w100]}>{this.state.journeyText}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={[]}
                                      onPress={() => { this.daliyVisitDescribe()}}
                                      underlayColor="#fff">
                        <View style={[com.row,com.jcsb,com.bgcfff,com.pdt5l15,com.btbwc6]}>
                            <Text>拜访描述</Text>
                            <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                        </View>
                    </TouchableOpacity>


                    <View style={[com.mgt5]}>
                        <TouchableOpacity style={[]}
                                          onPress={() => { this.dailyRemind()}}
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
                <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)}/>
                <DatePickerDialog ref="journeyDialog" onDatePicked={this.onJourneyDatePicked.bind(this)}/>
            </View>
        )
            ;
    }
}

