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
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../public/css/css-com';
import wds from '../public/css/css-window-single.js';
import Modal from 'react-native-modal'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import CheckBox from 'react-native-check-box'
import Picker from 'react-native-roll-picker'
export default class Log extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    finish() {
        alert('完成')
    }


    constructor(props) {
        super(props);
        this.state = {
            value: false,
            show: false
        };
    }

    onSelect(index, value) {
        this.setState({
            //text: `Selected index: ${index} , value: ${value}`
            text: ` ${value}`
        })
    }

    setVisibleModal(visible) {
        this.setState({show: visible});
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
                    <Text>新建客户</Text>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { alert('完成')}}>
                        <Text style={[com.cr,com.fs12]}>完成</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[com.flex]}>
                    <View style={[com.row,com.aic,com.bgcfff,com.btwc,com.pdt5l15,com.mgt5,com.btbwc]}>
                        <Text>客户名称</Text>
                        <TextInput
                            style={[{textAlign:'right'},com.mglr10,{height: 30,padding:5,width:screenW*0.69}]}
                            underlineColorAndroid={'transparent'}
                            numberOfLines={1}
                            placeholder='请填写客户名称'
                            placeholderTextColor='#bebebe'
                            secureTextEntry={false}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            />
                        <Image style={[com.wh14,com.tcccc]} source={require('../imgs/search.png')}/>
                    </View>
                    <View style={[com.row,com.btbwc,com.bgcfff,com.pdt5l15,com.jcsb,com.mgt5]}>

                        <Text>客户分类</Text>
                        <TouchableOpacity style={[]}
                                          underlayColor="transparent"
                                          onPress={() => {this.setState({show: !this.state.show})}}>
                            <View style={[com.row,com.aic]}>
                                <Text>请选择客户分类</Text>
                                <Image style={[com.wh12,com.tcccc]} source={require('../imgs/jtxx.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/*客户分类*/}
                    <View style={[com.row,com.jcsb,com.pdt5l15,com.bgcfff,com.aic]}>
                        <View style={[]}>
                            <Text>客户地址</Text>
                        </View>
                        <View style={[com.aic,com.jcfe]}>
                            <TouchableOpacity style={[com.pdtb5,com.blw,com.bc,com.bbwc,com.aife,com.flex,com.ww75]}
                                              underlayColor="transparent"
                                              onPress={() => { alert('省/市/区')}}>
                                <View style={[com.row,com.aic,com.jcfe]}>
                                    <Text>省/市/区</Text>
                                    <Image style={[com.wh12,com.tcccc]} source={require('../imgs/jtxx.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TextInput
                                style={[com.tar,com.bc,com.blw,com.bbw,com.mglr10,{height: 30,padding:5,width:screenW*0.75}]}
                                underlineColorAndroid={'transparent'}
                                numberOfLines={1}
                                placeholder='搜索'
                                placeholderTextColor='#bebebe'
                                secureTextEntry={false}
                                onChangeText={(text2) => this.setState({text2})}
                                value={this.state.text2}
                                />
                            <TouchableOpacity
                                underlayColor="transparent"
                                onPress={() => { alert('地图定位')}}>
                                <View style={[com.row,com.blw,com.pdtb5,com.bc,com.aic,com.jcfe,com.ww75]}>
                                    <Text>地图定位</Text>
                                    <Image style={[com.wh12,com.tcccc]} source={require('../imgs/dw.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Modal
                            animationType={"fade"}
                            transparent={true}
                            visible={this.state.show}
                            onRequestClose={() => {alert("Modal has been closed.")}}
                            >
                            <View style={{width:screenW,height:screenH,backgroundColor:'#555',opacity:0.6}}>
                                <TouchableOpacity style={{flex:1,height:screenH}} onPress={() => {
  this.setVisibleModal(!this.state.show)
}}></TouchableOpacity>
                            </View>

                            <View style={[com.pdlr5,com.jcc,wds.pos,{bottom:screenH*0.4},com.ww]}>
                                <View style={[com.br5,com.bbwc,com.mgl5,com.mglr10,com.bgcfff]}>
                                    <Text style={[com.cr,com.bbwc,com.pd5]}>请选择</Text>
                                    <TouchableHighlight
                                        style={[com.pdt5l15,]}
                                        onPress={()=>this.refs['item1'].onClick()}
                                        underlayColor="#f3f3f3"
                                        >
                                        <View style={[com.pos,com.pdb3,com.row,com.AIC,com.jcsb]}>
                                            <View style={[]}>
                                                <Text>A级 </Text>
                                            </View>
                                            <View>
                                                <CheckBox
                                                    ref="item1"
                                                    style={[{zIndex:100}]}
                                                    onClick={()=>{}}
                                                    isChecked={false}
                                                    checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                                    unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                                    />
                                            </View>
                                        </View>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        style={[com.pdt5l15,]}
                                        onPress={()=>this.refs['item2'].onClick()}
                                        underlayColor="#f3f3f3"
                                        >
                                        <View style={[com.pos,com.pdb3,com.row,com.AIC,com.jcsb]}>
                                            <View style={[]}>
                                                <Text>B级 </Text>
                                            </View>
                                            <View>
                                                <CheckBox
                                                    ref="item2"
                                                    style={[{zIndex:100}]}
                                                    onClick={()=>{}}
                                                    isChecked={false}
                                                    checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                                    unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                                    />
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={[com.pdt5l15,]}
                                        onPress={()=>this.refs['item3'].onClick()}
                                        underlayColor="#f3f3f3"
                                        >
                                        <View style={[com.pos,com.pdb3,com.row,com.AIC,com.jcsb]}>
                                            <View style={[]}>
                                                <Text>C级 </Text>
                                            </View>
                                            <View>
                                                <CheckBox
                                                    ref="item3"
                                                    style={[{zIndex:100}]}
                                                    onClick={()=>{}}
                                                    isChecked={false}
                                                    checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                                    unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                                    />
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={[com.pdt5l15,]}
                                        onPress={()=>this.refs['item4'].onClick()}
                                        underlayColor="#f3f3f3"
                                        >
                                        <View style={[com.pos,com.pdb3,com.row,com.AIC,com.jcsb]}>
                                            <View style={[]}>
                                                <Text>D级 </Text>
                                            </View>
                                            <View>
                                                <CheckBox
                                                    ref="item4"
                                                    style={[{zIndex:100}]}
                                                    onClick={()=>{}}
                                                    isChecked={false}
                                                    checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                                    unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                                    />
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>
                    </View>

                </ScrollView>
            </View>
        )
            ;
    }
}

