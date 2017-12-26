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
export default class DailyListMy extends Component {
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

    repose() {
        this.props.navigation.navigate('Report')
    }

    dailyDetailT() {
        this.props.navigation.navigate('DailyDetailT')
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

    //新建会议
    skipSearch() {
        this.props.navigation.navigate('SkipSearch')
    }

    //新建培训
    daliyNBTrain() {
        this.props.navigation.navigate('DaliyNBTrain')
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

    //动态信息获取 查看 我的客户

    you_message(_status) {
        if (_status == 10) {
            this.state._status = _status;
            return (
                <View style={[com.bgcfff]}>
                    {/*
                     <TouchableOpacity style={[com.bgcfff,com.mgl15,com.bbwc,com.mgb1,com.pdb5]}
                     onPress={() => { this.skipSearch();}}>
                     <View style={[com.row,com.pdlr15,com.aic]}>
                     <Image style={[com.wh16,com.tcbe,com.mgr10]} source={require('../../imgs/search.png')}/>
                     <Text>查找人员</Text>
                     </View>
                     </TouchableOpacity>
                     */}
                    <TouchableHighlight
                        onPress={()=>this.refs['item1'].onClick()}
                        underlayColor="#000000"
                        >
                        <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                            <View>
                                <CheckBox
                                    ref="item1"
                                    style={[com.flex,com.pdt15l20,com.pdl30,{}]}
                                    onClick={()=>{}}
                                    isChecked={false}
                                    checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                    unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                    />
                            </View>

                            <View
                                style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                <Text>全部</Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={()=>this.refs['item2'].onClick()}
                        underlayColor="#000000"
                        >
                        <View style={[com.bgcfff,com.pos,com.pdb3,com.row,com.AIC]}>
                            <View>
                                <CheckBox
                                    ref="item2"
                                    style={[com.flex,com.pdt15l20,com.pdl30,{}]}
                                    onClick={()=>{}}
                                    isChecked={false}
                                    checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                    unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                    />
                            </View>

                            <View
                                style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                <Text>直系下属(默认)</Text>
                            </View>
                        </View>
                    </TouchableHighlight>


                </View>
            )
        } else if (_status == 11) {
            this.state._status = _status;
            return (

                <View style={[com.bckf5,com.btwc,com.btwc]}>
                    <ScrollView>
                        <TouchableHighlight
                            onPress={()=>this.refs['item3'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bgcfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item2"
                                        style={[com.flex,com.pdt5l20,com.pdl30,{}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <Text>不限</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item4'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bgcfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item4"
                                        style={[com.flex,com.pdt5l20,com.pdl30,{}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <Text>拜访</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item5'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bgcfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item5"
                                        style={[com.flex,com.pdt5l20,com.pdl30,{}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <Text>线路拜访</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item6'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bgcfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item6"
                                        style={[com.flex,com.pdt5l20,com.pdl30,{}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <Text>任务</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item7'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bgcfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item7"
                                        style={[com.flex,com.pdt5l20,com.pdl30,{}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <Text>会议</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item8'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bgcfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item8"
                                        style={[com.flex,com.pdt5l20,com.pdl30,{}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt5,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <Text>培训</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            )
        }


    }


    render() {
        return (


            <View style={[com.flex]}>

                <ScrollView style={[,com.flex,{height:screenH}]}>
                    <View style={[com.bckf5,com.btwc,com.btwc]}>
                        <View style={[com.row,com.jcsa,com.pdt5l15,com.bbwc,com.aic,com.bgcfff]}>
                            <TouchableOpacity style={[com.pos]}
                                              onPress={() => { this.setState({isModalVisible: !this.state.isModalVisible})}}>
                                <View style={[com.row,com.pdlr15,com.aic]}>
                                    <Text>全部状态</Text>
                                    <Image style={[com.wh16,com.mgl5]} source={require('../../imgs/jtxx.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[com.pos]}
                                              onPress={() => { this.setState({isModalVisibleTwo: !this.state.isModalVisibleTwo})}}>
                                <View style={[com.row,com.pdlr15,com.aic]}>
                                    <Text>筛选</Text>
                                    <Image style={[com.wh16,com.tcbe,com.mgl5]} source={require('../../imgs/jtxx.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[com.pos]}
                                              onPress={() => { this.skipSearch()}}>
                                <View style={[com.row,com.pdlr15,com.aic]}>
                                    <Image style={[com.wh16,com.tcbe,com.mgr5]} source={require('../../imgs/search.png')}/>
                                    <Text>搜索</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={[]}>
                            <View style={[com.mixf3,com.bbwc]}>
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

                        {/*页面级-下拉框*/}
                        <View>
                            <Modal
                                backdropOpacity={0}
                                animationIn={'slideInDown'}
                                animationOut={'slideOutUp'}
                                isVisible={this.state.isModalVisible}
                                >
                                <TouchableWithoutFeedback
                                    onPress={() => this.setState({isModalVisible: !this.state.isModalVisible})}>
                                    <View style={{flex:1}}>
                                        <View
                                            style={[com.posr,com.h200,{top:80,left:0,width:screenW,height:screenH,backgroundColor:'#000',opacity:0.6}]}></View>
                                        <View style={[com.posr,{top:0}]}>
                                            <View style={[com.bckfff,com.mgt70]}>
                                                {/*页面级-下拉框内容*/}
                                                <View style={[com.pdt5,com.pdb5,com.row,]}>
                                                    <View style={[{width:screenW}]}>
                                                        <TouchableHighlight
                                                            style={[com.pdt5l15,com.bbwc]}
                                                            onPress={() => {this.setState({isModalVisible: !this.state.isModalVisible});}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View>
                                                                <Text style={[com.cr]}>全部状态</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                        <TouchableHighlight
                                                            style={[com.pdt5l15,com.bbwc]}
                                                            onPress={() => {this.setState({isModalVisible: !this.state.isModalVisible});}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View>
                                                                <Text style={[]}>无进展</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                        <TouchableHighlight
                                                            style={[com.pdt5l15,com.bbwc]}
                                                            onPress={() => {this.setState({isModalVisible: !this.state.isModalVisible});}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View>
                                                                <Text style={[]}>有进展</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                        <TouchableHighlight
                                                            style={[com.pdt5l15,com.bbwc]}
                                                            onPress={() => {this.setState({isModalVisible: !this.state.isModalVisible});}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View>
                                                                <Text style={[]}>未结束</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                        <TouchableHighlight
                                                            style={[com.pdt5l15,com.bbwc]}
                                                            onPress={() => {this.setState({isModalVisible: !this.state.isModalVisible});}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View>
                                                                <Text style={[]}>已结束</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                        <TouchableHighlight
                                                            style={[com.pdt5l15,com.bbwc]}
                                                            onPress={() => {this.setState({isModalVisible: !this.state.isModalVisible});}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View>
                                                                <Text style={[]}>已撤销</Text>
                                                            </View>
                                                        </TouchableHighlight>

                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>

                            </Modal>

                            <Modal
                                backdropOpacity={0}
                                animationIn={'slideInDown'}
                                animationOut={'slideOutUp'}
                                isVisible={this.state.isModalVisibleTwo}
                                >
                                <TouchableWithoutFeedback
                                    onPress={() => this.setState({isModalVisibleTwo: !this.state.isModalVisibleTwo})}>

                                    <View style={{flex:1}}>
                                        <View
                                            style={[com.posr,com.h200,{top:75,left:0,width:screenW,height:screenH,backgroundColor:'#000',opacity:0.6}]}></View>
                                        <View style={[com.posr,{top:0}]}>
                                            <View style={[com.bckfff,com.mgt70]}>
                                                {/*页面级-下拉框内容*/}
                                                <View style={[com.bgcfff,com.ww,com.row,com.hh3]}>
                                                    <View>
                                                        <TouchableHighlight
                                                            style={[com.bbwc,com.ww204]}
                                                            onPress={()=>{this.you_message(10);this.setState({myChat: !this.state.myChat,chooseStaff:1})}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View
                                                                style={[com.pdt5l15,(this.state.chooseStaff==1) ?(com.bgcfff):(com.bgcf5)]}>
                                                                <Text style={[]}>选择员工</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                        <TouchableHighlight
                                                            style={[com.jcc,]}
                                                            onPress={()=>{this.you_message(11);this.setState({myChat: !this.state.myChat,chooseStaff:2})}}
                                                            underlayColor="#f0f0f0"
                                                            >
                                                            <View style={[com.pdt5l15,(this.state.chooseStaff==2) ?(com.bgcfff):(com.bgcf5)]}>
                                                                <Text style={[]}>工作类型</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    </View>
                                                    <View style={[com.flex,com.bgcfff]}>

                                                        {this.you_message(this.state._status)}
                                                    </View>
                                                </View>
                                                <View style={[com.btwc,com.pd5,com.rsc]}>
                                                    <Text style={[com.cr]}>重置</Text>
                                                    <Text style={[com.cr]}>确认</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>

                            </Modal>
                        </View>

                    </View>

                </ScrollView>

            </View>
        )
            ;
    }
}

