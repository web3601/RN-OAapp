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
            tab: 1,
            change:true

        };
    }

    setVisibleModal(visible) {
        this.setState({show: visible});
    }

    repose() {
        this.props.navigation.navigate('Report')
    }

    dailyDetail() {
        this.props.navigation.navigate('DailyDetail')
    }

    save() {
        alert('save');
    }

    //新建拜访
    daliyNBVisit() {
        this.props.navigation.navigate('DaliyNBVisit')
    }

    //线路拜访
    daliyLVisit() {
        this.props.navigation.navigate('DaliyLVisit')
    }

    //新建任务
    daliyNBTask() {
        this.props.navigation.navigate('DaliyNBTask')
    }

    //新建会议
    daliyNBMetting() {
        this.props.navigation.navigate('DaliyNBMetting')
    }

    //新建会议
    dailyList() {
        this.props.navigation.navigate('DailyList')
    }

    //新建培训
    daliyNBTrain() {
        this.props.navigation.navigate('DaliyNBTrain')
    }


    state = {
        isModalVisible: false
    }

    _showModal = () => this.setState({isModalVisible: true})

    //动态信息获取 查看 我的客户
    my_message(status_) {
        if (status_ == 4) {
            this.state.status_ = status_;
            return (
                <View style={[com.mgt170,com.bckf5,com.btwc,com.btwc]}>
                    <View style={[com.row,com.jcsb,com.pdt5l15,com.bbwc]}>
                        <View style={[com.row]}>
                            <Text style={[com.mgr5]}>全部</Text>
                            <Text>日程3项</Text>
                        </View>
                        <View style={[com.row]}>
                            <Text>筛选</Text>
                            <Image style={[com.wh24,com.tcr]} source={require('../imgs/navld32.png')}/>
                        </View>
                    </View>

                    <View style={[]}>

                        <TouchableHighlight
                            style={[]}
                            onPress={()=>{this.dailyDetail()}}
                            underlayColor="#f5f5f5"
                            >
                            <View style={[com.row,com.aic,com.pdt5l15,com.bbwc]}>
                                <View style={[com.mgr10]}>
                                    <Text style={[com.cbe]}>16:52</Text>
                                </View>
                                <View style={[com.row,com.aic,com.jcsb,com.flex]}>
                                    <View>
                                        <Text>aaa</Text>
                                        <View style={[com.row,com.aic]}>
                                            <Text style={[com.mgr5,com.cfff,com.fs10,com.bgc24,com.pdt1l10,com.br10]}>临时拜访</Text>
                                            <Text style={[com.cb4]}>侯总2</Text>
                                        </View>
                                    </View>
                                    <View style={[]}>
                                        <Text style={[com.c62]}>有进展</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>


                    </View>


                </View>

            )
        } else if (status_ == 5) {
            this.state.status_ = status_;
            return (

                <View style={[com.mgt170,com.bckf5,com.btwc,com.btwc]}>
                    <View style={[com.row,com.jcsb,com.pdt5l15,com.bbwc]}>
                        <View style={[com.row]}>
                            <Text style={[com.mgr5]}>直系下属</Text>
                            <Text>日程1项</Text>
                        </View>
                        <View style={[com.row]}>
                            <Text>筛选</Text>
                            <Image style={[com.wh24,com.tcccc]} source={require('../imgs/navld32.png')}/>
                        </View>
                    </View>

                    <View style={[]}>

                        <TouchableHighlight
                            style={[]}
                            onPress={()=>{this.dailyDetail()}}
                            underlayColor="#f5f5f5"
                            >
                            <View style={[com.row,com.aic,com.pdt5l15,com.bbwc]}>
                                <View style={[com.mgr10]}>
                                    <Text style={[com.cbe]}>全天</Text>
                                </View>
                                <View style={[com.row,com.aic,com.jcsb,com.flex]}>
                                    <View>
                                        <Text>aaa</Text>
                                        <View style={[com.row,com.aic]}>
                                            <Text style={[com.mgr5,com.cfff,com.fs10,com.bgc24,com.pdt1l10,com.br10]}>临时拜访</Text>
                                            <Text style={[com.cb4]}>侯总2</Text>
                                        </View>
                                    </View>
                                    <View style={[]}>
                                        <Text style={[com.c62]}>有进展</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>


                    </View>


                </View>
            )
        }


    }


    render() {
        return (


            <View style={[com.flex]}>

                {/*自定义导航*/}
                {/*自定义导航栏-中间*/}
                <View style={[com.row,com.jcc,com.bckfff,com.pos]}>
                    <View style={[com.row]}>
                        <TouchableHighlight
                            style={[com.jcc,]}
                            onPress={()=>{this.my_message(4);this.setState({myChat: !this.state.myChat,tab:1})}}
                            //onPress={()=>{this.my_message(4);}}
                            underlayColor="#fff"
                            >
                            <View style={[com.pdt10,com.pdlr10]}>
                                <Text style={[com.mgb9]}>我的日程</Text>
                                {this.state.tab == 1 ? (<Image style={[{height:1,width:55},com.tcr]}
                                                               source={require('../imgs/daily/straightLine.png')}/>) : (
                                    <Image style={[{height:1,width:55},com.tcr]}
                                           source={require('../imgs/daily/straightLinefz.png')}/>)}
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={[com.jcc,]}
                            onPress={()=>{this.my_message(5);this.setState({myChat: !this.state.myChat,tab:2})}}
                            underlayColor="#fff"
                            >
                            <View style={[com.pdt10,com.pdlr10]}>
                                <Text style={[com.mgb9]}>下属日程</Text>
                                {this.state.tab == 2 ? (<Image style={[{height:1,width:55},com.tcr]}
                                                               source={require('../imgs/daily/straightLine.png')}/>) : (
                                    <Image style={[{height:1,width:55},com.tcr]}
                                           source={require('../imgs/daily/straightLinefz.png')}/>)}
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

                {/*自定义导航栏-定位左边*/}
                <TouchableHighlight
                    style={[com.posr,{top:8,left:10}]}
                    onPress={()=>{this.repose()}}
                    underlayColor="#f5f5f5"
                    >
                    <View style={[]}>
                        <Image style={[com.wh24,com.tcr]} source={require('../imgs/bbr32.png')}/>
                    </View>
                </TouchableHighlight>

                {/*自定义导航栏-定位右边*/}
                <View style={[com.row,com.posr,{top:8,right:10}]}>
                    <TouchableHighlight
                        style={[com.mgr15,com.aic]}
                        onPress={()=>{{this.setState({change:!this.state.change})}}}
                        underlayColor="#f5f5f5"
                        >
                        <View style={[com.aic,com.jcc]}>
                            {this.state.change==true?(<Image style={[com.wh24,com.tc6873]} source={require('../imgs/cirmenu32.png')}/>):(<Image style={[com.wh24,com.tc285]} source={require('../imgs/daily/calres2.png')}/>)}

                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[]}
                        onPress={()=>{this.dailyList()}}
                        underlayColor="#f5f5f5"
                        >
                        <View style={[]}>
                            <Image style={[com.wh24,com.tcr]} source={require('../imgs/rypz.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>

                <ScrollView style={[com.pos,com.flex,{height:screenH}]}>
                    {this.my_message(this.state.status_)}

                </ScrollView>

                {/*事件触发-加号图标*/}
                <TouchableOpacity style={[com.posr,{top:screenH*0.75,right:30,zIndex:99999}]}
                                  onPress={() => {{this.setState({show: !this.state.show})}}}>
                    <View>
                        <Image
                            style={[com.tcr,com.wh32,]} source={require('../imgs/addr.png')}/>
                    </View>
                </TouchableOpacity>

                {/*事件插件区域*/}
                <View style={[com.posr,com.bbwc,com.jcc,com.aic,com.h150,com.bgce6,com.ww,com.btbwd,{top:50}]}>
                    <Text>这是时间插件区域</Text>
                </View>

                {/* 添加模型-加号图标 */}
                <View>
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.show}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        >
                        {/*
                         <View style={{width:screenW,height:screenH,backgroundColor:'#fff',opacity:1}}>
                         <TouchableOpacity style={{flex:1,height:screenH}} onPress={() => {
                         this.setVisibleModal(!this.state.show)
                         }}></TouchableOpacity>
                         </View>*/}
                        <View style={[com.flex,com.pos,com.hh99,com.bgcfff]}>
                            <View style={[com.pdl50,com.pdt70]}>
                                <View style={[com.row,com.aic,com.mgb5]}>
                                    <Text style={[com.fs40,com.mgr15]}>11</Text>
                                    <View>
                                        <Text style={[com.fs12]}>星期二</Text>
                                        <Text style={[com.fs12]}>07/2017</Text>
                                    </View>
                                </View>
                                <Text>心有多大,舞台就有多大!</Text>
                            </View>

                            <View style={[com.posr,{top:screenH*0.5,left:0},com.bgcfff]}>

                                <View style={[com.hh4,com.ww,]}>

                                    <View style={[com.row,com.jcsb,com.pdt5l15]}>
                                        <TouchableOpacity style={[com.pdtb5,com.wh75,com.aic,]}
                                                          onPress={() => { this.setVisibleModal(!this.state.show);this.daliyNBVisit()}}>
                                            <View style={[com.aic,com.jcc]}>
                                                <Image
                                                    style={[com.tcr,com.wh48,com.mgb5]}
                                                    source={require('../imgs/daily/ld200res.png')}/>
                                                <Text>新建拜访</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[com.pdtb5,com.wh75,com.aic,]}
                                                          onPress={() => { this.setVisibleModal(!this.state.show);this.daliyLVisit()}}>
                                            <View style={[com.aic,com.jcc]}>
                                                <Image
                                                    style={[com.wh48,com.mgb5]}
                                                    source={require('../imgs/daily/xlbf200res.png')}/>
                                                <Text>线路拜访</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[com.pdtb5,com.wh75,com.aic,]}
                                                          onPress={() => { this.setVisibleModal(!this.state.show);this.daliyNBTask()}}>
                                            <View style={[com.aic,com.jcc]}>
                                                <Image
                                                    style={[com.wh48,com.mgb5]}
                                                    source={require('../imgs/daily/rw200res.png')}/>
                                                <Text>新建任务</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[com.row,com.jcsb,com.pdt5l15,com.mgt15]}>
                                        <TouchableOpacity style={[com.pdtb5,com.wh75,com.aic,]}
                                                          onPress={() => { this.setVisibleModal(!this.state.show);this.daliyNBMetting()}}>
                                            <View style={[com.aic,com.jcc]}>
                                                <Image
                                                    style={[com.tc3,com.wh48,com.mgb5]}
                                                    source={require('../imgs/daily/hyres.png')}/>
                                                <Text>新建会议</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[com.pdtb5,com.wh75,com.aic,]}
                                                          onPress={() => { this.setVisibleModal(!this.state.show);this.daliyNBTrain()}}>
                                            <View style={[com.aic,com.jcc]}>
                                                <Image
                                                    style={[com.tc2,com.wh48,com.mgb5,]}
                                                    source={require('../imgs/daily/newtrainres.png')}/>
                                                <Text>新建培训</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[com.pdtb5,com.wh75,com.aic,]}
                                                          onPress={() => { this.setVisibleModal(!this.state.show);this.goPage_customerAdd()}}>
                                            <View style={[com.aic,com.jcc]}>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                </View>

                                <TouchableHighlight
                                    style={[com.bgcfff,com.ww,com.aic,com.pdt5,com.btwd]}
                                    onPress={()=>{this.setVisibleModal(!this.state.show)}}
                                    underlayColor="#f5f5f5"
                                    >
                                    <Text style={[com.fwb,com.aic]}>X</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        )
            ;
    }
}

