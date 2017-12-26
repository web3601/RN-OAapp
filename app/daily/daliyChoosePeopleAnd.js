/**
 * Created by Administrator on 2017/6/7.
 * 新增客户
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Picker,
    TouchableHighlight,
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import CheckBox from 'react-native-check-box'
import com from '../public/css/css-com';

//import config from '../common/config';
//import toast from '../common/toast';
//import request from '../common/request';

export default class DaliyChoosePeople extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        this.state = {
            value: false,
            text: '',
        };
    }

    onSelect(index, value) {
        this.setState({
            //text: `Selected index: ${index} , value: ${value}`
            text: ` ${value}`
        })
    }

    daliyChooseRange() {
        this.props.navigation.navigate('DaliyChoosePeople')
    }

    render() {

        return (
            <View style={[com.flex]}>
                {/*nav*/}
                <View style={[com.row,com.pdt5l15,com.bgcfff,com.jcsb,com.bbwcc]}>
                    <TouchableOpacity style={[]}
                                      onPress={() => { this.back()}}
                                      underlayColor="#fff">
                        <Text style={[com.cr]}>取消</Text>
                    </TouchableOpacity>
                    <Text>选择执行人</Text>
                    <Text></Text>
                </View>

                <View>
                    <TouchableOpacity

                        onPress={() => { this.daliyChooseRange()}}
                        underlayColor="#fff">
                        <View style={[com.row,com.pdt5l15,com.bgcfff,com.jcsb,com.aic]}>
                            <Text>选择员工</Text>
                            <View style={[com.row,com.aic]}>
                                <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={[com.pdt3,com.pdl15]}>
                        <Text style={[com.fs12,com.cbe]}>最近选择</Text>
                    </View>
                    <View style={[com.btwc,]}>
                        <TouchableHighlight
                            onPress={()=>this.refs['item1'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item1"
                                        style={[com.flex,com.pdt20,com.pdb15,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,{top:-5},com.row,com.pdt15,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6}]}>
                                    <Text>全部</Text>
                                </View>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={[com.bgcfff]}
                            onPress={()=>this.refs['item2'].onClick()}
                            underlayColor="#000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item2"
                                        style={[com.flex,com.pdt25,com.pdl15,com.pdr15,com.pdb20,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,{top:-5},com.row,com.pdt10,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6}]}>
                                    <View style={[com.br200,com.mgr5,com.bwa,com.aic,com.pd2]}>
                                        <Image
                                            style={[com.wh32]} source={require('../imgs/tx/txb2.png')}/>

                                    </View>
                                    <Text>乔峰</Text>
                                </View>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={[com.bgcfff]}
                            onPress={()=>this.refs['item3'].onClick()}
                            underlayColor="#000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item3"
                                        style={[com.flex,com.pdt25,com.pdl15,com.pdr15,com.pdb20,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,{top:-5},com.row,com.pdt10,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6}]}>
                                    <View style={[com.br200,com.mgr5,com.bwa,com.aic,com.pd2]}>
                                        <Image
                                            style={[com.wh32,com.br200]} source={require('../imgs/tx/txz2.png')}/>

                                    </View>
                                    <Text>李云龙</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

            </View>
        );
    }
}

