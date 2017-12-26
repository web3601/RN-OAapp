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
export default class DailyDetailMettingVR extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    //提交
    submit() {
        alert('这是提交按钮');
        //this.props.navigation.navigate('DailyDetailTaskVR')

    }

    //选择人员
    chooseRange() {
        this.props.navigation.navigate('ChooseRange')

    }

    //删除
    goonDel(id) {
        //alert(id)
        var imgArr = this.state.imgArr;
        var op = [];
        //console.log('id+ ' + id)
        //console.log(imgArr)
        for (var i in imgArr) {
            //console.log(i)
            if (imgArr[i].id === id) {
                op.push(
                    {id: imgArr[i].id, visible: 'none', path: imgArr[i].path}
                )
            } else {
                op.push(
                    {id: imgArr[i].id, visible: imgArr[i].visible, path: imgArr[i].path}
                )
            }
        }
        this.setState({
            imgArr: op
        })
    }

    //图片上传
    openFloder() {
        //alert('这是打开文件夹')
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            //alert(this.state.id)
            this.state.imgArr.push({id: this.state.id, visible: null, path: image.path});
            this.setState({//放到这里只是为了渲染页面
                id: this.state.id + 1
            })
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            imgArr: [],
            id: 1,
        };
    }

    render() {
        const { inputText } = this.state;

        let imgArr = this.state.imgArr;
        var list = [];
        for (var i = 0; i < imgArr.length; i++) {
            list.push(
                <View key={i} style={imgArr[i].visible?{display: imgArr[i].visible}:null}>
                    <View style={[com.pos]}>
                        <Image source={{uri: imgArr[i].path}} style={[com.MG5,com.wh64,com.pos]}/>
                        <TouchableHighlight
                            style={[com.MG5,com.posr,{top:-3,right:0}]}
                            onPress={this.goonDel.bind(this,imgArr[i].id)}
                            underlayColor="#f5f5f5"
                            >
                            <Image source={require('../../imgs/del162.png')} style={[com.wh16,]}/>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }
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

                    <Text>会议汇报</Text>

                    <TouchableHighlight
                        onPress={()=>this.submit()}
                        underlayColor="#ffffff"
                        >
                        <View style={[com.row,com.aic]}>
                            <Text style={[com.cr]}>提交</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={[com.flex,com.bgcf5]}>
                    <View style={[com.mixbgcf3]}>
                        <Text style={[com.cbe,com.fs10]}>拜访汇报</Text>
                    </View>
                    <View style={[com.row,com.aic,com.bgcfff,com.pdt5l15,com.bbweb]}>
                        <Text>会议内容</Text>
                        <TextInput
                            style={[{width:screenW*0.8},com.h30,com.pd5]}
                            underlineColorAndroid='transparent'
                            numberOfLines={1}
                            multiline={false}
                            textAlignVertical="top"
                            placeholder='请输入文本(必填)'
                            placeholderTextColor='#cfcfcf'
                            secureTextEntry={false}
                            onChangeText={(t1) => this.setState({inputText: t1})}
                            />
                    </View>
                    <View style={[com.row,com.aic,com.bgcfff,com.pdt5l15,com.bbweb]}>
                        <Text>预计结果</Text>
                        <TextInput
                            style={[{width:screenW*0.8},com.h30,com.pd5]}
                            underlineColorAndroid='transparent'
                            numberOfLines={1}
                            multiline={false}
                            textAlignVertical="top"
                            placeholder='请输入文本'
                            placeholderTextColor='#cfcfcf'
                            secureTextEntry={false}
                            onChangeText={(t2) => this.setState({inputText: t2})}
                            />
                    </View>
                    <View style={[com.row,com.aic,com.bgcfff,com.pdt5l15,com.bbweb]}>
                        <Text>今后计划</Text>
                        <TextInput
                            style={[{width:screenW*0.8},com.h30,com.pd5]}
                            underlineColorAndroid='transparent'
                            numberOfLines={1}
                            multiline={false}
                            textAlignVertical="top"
                            placeholder='请输入文本'
                            placeholderTextColor='#cfcfcf'
                            secureTextEntry={false}
                            onChangeText={(t3) => this.setState({inputText: t3})}
                            />
                    </View>

                    <View style={[com.pdt5l15,com.bgcfff,com.bbweb]}>
                        <Text>拜访内容</Text>
                        <TextInput
                            style={[com.ww9,com.h30,com.pd0,com.fs12,com.hh2]}
                            underlineColorAndroid='transparent'
                            numberOfLines={6}
                            multiline={true}
                            textAlignVertical="top"
                            placeholder='请输入文本'
                            placeholderTextColor='#bebebe'
                            secureTextEntry={false}
                            onChangeText={(text) => this.setState({inputText: text})}
                            />
                        <View style={[com.row,com.aic,com.jcsb]}>
                            <Text>拍照</Text>
                            <TouchableHighlight
                                onPress={()=>this.openFloder()}
                                underlayColor="#ffffff"
                                >
                                <View style={[com.bgcfff]}>
                                    <Image
                                        style={[com.tcccc,com.wh24,]} source={require('../../imgs/zxj32.png')}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={[com.row,com.ww,com.flww,com.pdl5]}>
                            {list}
                        </View>
                    </View>
                    <View style={[com.mgt5,com.bbweb]}>
                        <View style={[com.mixbgcfff_nobb]}>
                            <Text style={[com.tabfc]}>接收人</Text>
                        </View>
                        <TouchableHighlight
                            onPress={()=>this.chooseRange()}
                            underlayColor="#ffffff"
                            >
                            <View style={[com.pdlr15,com.bgcfff]}>
                                <Image
                                    style={[com.tcccc,com.wh32,]} source={require('../../imgs/iconadd.png')}/>
                            </View>
                        </TouchableHighlight>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

