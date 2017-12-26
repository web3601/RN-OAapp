import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../public/css/css-com';
var config = require('../common/config');
var request = require('../common/request');
export default class BusinessTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conNum: '',
            conTex: '',
            data: []
        };
    }

    //搜索信息
    submit() {
        if (this.state.conNum && this.state.conTex) {
            return
        }
        var url = config.api.base + config.api.handle;
        request.post(url, {
            conNum: this.state.conNum,
            conTex: this.state.conText,
        }).then((res) => {
            alert(JSON.stringify(res.msg))
        })
            .catch((error)=> {
                //toast.bottom('网络连接失败，请检查网络后重试');
            });
    }

    //查询信息
    searchData() {
        //if (this.state.conNum && this.state.conTex) {
        //    return
        //}
        var url = config.api.base + config.api.searchData;
        request.post(url, {
            //conNum: this.state.conNum,
            //conTex: this.state.conText,
        }).then((res) => {
            //alert(JSON.stringify(res))
            this.setState({
                data: res
            })
        })
            .catch((error)=> {
                //toast.bottom('网络连接失败，请检查网络后重试');
            });
    }

    render() {
        var data = this.state.data;
        var list = [];
        for (var i in data) {
            list.push(
                <View key={i} style={[com.row,com.bgcf5,com.mgb2,com.pdtb5]}>
                    <Text>{data[i].id}</Text>
                    <Text style={[com.mglr5,{minWidth:150}]}>{data[i].connum}</Text>
                    <Text>{data[i].contex}</Text>
                </View>
            )
        }

        return (
            <View>
                <View style={[com.bgcfff,com.mgb10,com.bbweb]}>
                    <TextInput
                        style={[com.bwc,com.br5,com.mglr10,{height: 30,padding:5,width:screenW*0.75}]}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        placeholder='搜索'
                        placeholderTextColor='#bebebe'
                        secureTextEntry={false}
                        onChangeText={(conNum) => this.setState({conNum})}
                        value={this.state.conNum}
                        />
                    <TextInput
                        style={[com.bwc,com.br5,com.mglr10,{height: 30,padding:5,width:screenW*0.75}]}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        placeholder='搜索'
                        placeholderTextColor='#bebebe'
                        secureTextEntry={false}
                        onChangeText={(conText) => this.setState({conText})}
                        value={this.state.conText}
                        />
                    <TouchableOpacity onPress={()=>this.submit()}>
                        <View style={[com.bgcfff,com.ww2,com.br200,com.aic,com.jcc]}>
                            <Text style={[com.pdt5l15]}>提交</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[com.bgcfff,com.aic]}>
                    <TouchableOpacity onPress={()=>this.searchData()}>
                        <View style={[com.bgcfff,com.ww2,com.br,com.aic,com.jcc]}>
                            <Text style={[com.pdt5l15]}>查询</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[com.bgcfff,com.pdtb5]}>
                    {list}
                </View>
            </View>

        );
    }
}
