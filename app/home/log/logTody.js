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

export default class Log extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        this.state = {
            status: 1,
            status_: 4,

        };
    }

    newBulid() {
        this.props.navigation.navigate('AddRss')
    }


    //动态信息获取 查看 我的客户
    my_message(status_) {
        const {navigate} = this.props.navigation;
        if (status_ == 4) {
            this.state.status_ = status_;
            return (
                <View style={[com.bckf5,com.btwc,]}>
                    <View style={[]}>
                        <TouchableHighlight
                            //onPress={()=>this.logDeatilSef()}
                            onPress={()=>navigate('LogDetailSef',{title:'李云龙'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row,]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txb1.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>李云龙</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'赵刚'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txb2.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>赵刚</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'丁伟'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txb3.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>丁伟</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'孔捷'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.aic,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txb4.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>孔捷</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
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
                <View style={[com.bckf5,com.btwc,]}>
                    <View style={[]}>
                        <TouchableHighlight
                            //onPress={()=>this.logDeatilSef()}
                            onPress={()=>navigate('LogDetailSef',{title:'魏和尚'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row,]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txz1.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>魏和尚</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'段鹏'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txz2.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>段鹏</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'陈庚'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txz3.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>陈庚</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'二营长'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.aic,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txf.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>二营长</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        } else if (status_ == 6) {
            this.state.status_ = status_;
            return (
                <View style={[com.bckf5,com.btwc,]}>
                    <View style={[]}>
                        <TouchableHighlight
                            //onPress={()=>this.logDeatilSef()}
                            onPress={()=>navigate('LogDetailSef',{title:'平安县县城'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row,]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txb5.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>平安县县城</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'意大利炮'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txb6.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>意大利炮</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'亮剑'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.AIC,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txz1.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>亮剑</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>navigate('LogDetailSef',{title:'楚云飞'})}
                            underlayColor="#f3f3f3"
                            >
                            <View style={[com.bckfff,com.pdt5l10,com.row,com.aic,com.bbwc]}>

                                <View
                                    style={[com.aic,com.row,com.jcsb,{width:screenW*0.95}]}>
                                    <View style={[com.row]}>
                                        <View style={[com.bweb,com.br200,com.mgr5]}>
                                            <Image
                                                style={[com.br200,com.wh32,]}
                                                source={require('../../imgs/tx/txz2.png')}/>
                                        </View>


                                        <View style={[com.jcc]}>
                                            <Text>楚云飞</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[com.fs12,com.cbe]}>未提交</Text>
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

                {/*导航栏*/}
                <View style={[com.row,com.jcsb,com.pdlr5,com.bgcfff,com.bbwcc,com.aic,com.h30,]}>
                    <TouchableHighlight
                        style={[com.w90]}
                        onPress={()=>this.back()}
                        underlayColor="#f3f3f3"
                        >
                        <View style={[com.row,]}>
                            <Image source={require('../../imgs/navxy.png')}/>
                            <Text style={[com.mgr15,com.cr]}>返回</Text>
                            <Text style={[com.cr]}>关闭</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={[{left:-15}]}>今天日志</Text>
                    <TouchableHighlight
                        style={[]}
                        onPress={()=>alert(1)}
                        underlayColor="#f3f3f3"
                        >
                        <View style={[com.jcfe,]}>
                            <Image style={[com.wh20,com.tcr]} source={require('../../imgs/iconsj.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>
                {/*内容主题*/}
                <View style={[com.row,com.jcsa,com.bckfff]}>
                    <TouchableHighlight
                        style={[com.jcc,]}
                        onPress={()=>{this.my_message(4);this.setState({myChat: !this.state.myChat})}}
                        underlayColor="#f3f3f3"
                        >
                        <View style={[com.aic,com.jcc]}>
                            <Text style={[this.state.status_==4?com.cr:null,com.pdb6,com.pdt6]}>日报</Text>
                            {this.state.status_==4?(<Image style={[{height:1,width:screenW*0.3},com.tcr]}
                                                           source={require('../../imgs/daily/straightLine.png')}/>) : (
                                <Image style={[{height:1,width:screenW*0.3},com.tcr]}
                                       source={require('../../imgs/daily/straightLinefz.png')}/>)}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[com.jcc,]}
                        onPress={()=>{this.my_message(5);this.setState({myChat: !this.state.myChat})}}
                        underlayColor="#f3f3f3"
                        >
                        <View style={[com.aic,com.jcc]}>
                            <Text style={[this.state.status_==5?com.cr:null,com.pdb6,com.pdt6]}>周报</Text>
                            {this.state.status_==5?(<Image style={[{height:1,width:screenW*0.3},com.tcr]}
                                                           source={require('../../imgs/daily/straightLine.png')}/>) : (
                                <Image style={[{height:1,width:screenW*0.3},com.tcr]}
                                       source={require('../../imgs/daily/straightLinefz.png')}/>)}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[com.jcc,]}
                        onPress={()=>{this.my_message(6);this.setState({myChat: !this.state.myChat})}}
                        underlayColor="#f3f3f3"
                        >
                        <View style={[com.aic,com.jcc]}>
                            <Text style={[this.state.status_==6?com.cr:null,com.pdb6,com.pdt6]}>月报</Text>
                            {this.state.status_==6?(<Image style={[{height:1,width:screenW*0.3},com.tcr]}
                                                           source={require('../../imgs/daily/straightLine.png')}/>) : (
                                <Image style={[{height:1,width:screenW*0.3},com.tcr]}
                                       source={require('../../imgs/daily/straightLinefz.png')}/>)}
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={[com.flex,{height:screenH}]}>
                    {this.my_message(this.state.status_)}
                </ScrollView>
            </View>
        )
    }
}

