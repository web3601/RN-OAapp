/**
 * Created by Administrator on 2017/6/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Alert,
    } from 'react-native';

export default class WebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            text:'',
        };
    }
    OpBack() {
        this.props.navigation.goBack()
    };
    render(){
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                    <Image  style={styles.back} source={require('../imgs/lljt.png')}/>
                    <Text style={styles.backwz} onPress={()=>this.OpBack()}>
                        返回
                    </Text>
                    <Text style={styles.close} onPress={()=>this.OpBack()}>
                        关闭
                    </Text>
                    <Text style={styles.info}
                        >企业工商信息
                    </Text>
                </View>
                <View style={styles.ceshi}>
                    <TouchableWithoutFeedback
                        onPress={()=>{this.setState({count: this.state.count + 1})}}
                        onLongPress={()=>{
                            Alert.alert('提示','确认删除吗？',[
                                {text:'取消',onPress:()=>{},style:'cancel'},
                                {text:'确定',onPress:()=>{}},
                            ]);
                        }}
                        >
                        <View>
                            <Text>
                                我是TouchableWithoutFeedback,单击我
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text>您单击了：{this.state.count}次</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ancestorCon: {
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    container: {
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 10
    },
    back: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 5,
        left: 3
    },
    backwz: {
        position: 'absolute',
        top: 5,
        left: 25,
        color: 'red',
    },
    close:{
        position: 'absolute',
        top: 5,
        left: 55,
        color: 'red',
    },
    info: {
        fontSize: 16,
        paddingTop: 2
    },
    ceshi:{
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        justifyContent: 'center',
    },
    button:{
        borderWidth:1,
        height:20,
        borderColor:"#ccc",
        backgroundColor:'#fff'
    },
    buttonText:{
        height:20,
        borderWidth:1,
        borderColor:"#ccc",
        marginBottom:5
    },
    text:{
        height:20,
        borderWidth:1,
        borderColor:"#ccc",
        backgroundColor:'#ff00ff'
    }
});
