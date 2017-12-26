/**
 * Created by Administrator on 2017/6/7.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class Info extends Component {
    OpBack() {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={()=>this.OpBack()}
                        >
                        <View style={styles.backAll} >
                            <Image  style={styles.back} source={require('../imgs/lljt.png')}/>
                            <Text style={styles.backwz}>
                                返回
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.info}
                        >个人信息
                    </Text>
                </View>
                <ScrollView style={styles.childContent}>
                    <View style={styles.modifyPhoto}>
                        <Text style={styles.modifyText}>头像</Text>
                        <Image style={styles.myself} source={require('../imgs/myself.png')}/>
                        <Image style={styles.rjt2} source={require('../imgs/rjt.png')}/>
                    </View>

                    <View style={[styles.TotalSetting]}>
                    <View style={[styles.TotalSetting1]}>
                        <Text style={styles.wz2} >姓名</Text>
                        <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                    </View>
                    <View style={[styles.TotalSetting1]}>
                        <Text style={styles.wz2} >电话</Text>
                        <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                    </View>
                    <View style={[styles.TotalSetting1]}>
                        <Text style={styles.wz2} >邮箱</Text>
                        <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                    </View>
                    <View style={[styles.TotalSetting1]}>
                        <Text style={styles.wz2} >部门</Text>
                    </View>
                    <View style={[styles.TotalSetting1]}>
                        <Text style={styles.wz2} >职位</Text>
                        <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                    </View>
                </View>
                    <View style={[styles.SettingAddress]}>
                        <Text style={styles.wz1} >地址</Text>
                        <Image style={styles.rjt1} source={require('../imgs/rjt.png')}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ancestorCon:{
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    childContent: {//子容器页面级
        flex: 1
        //justifyContent: 'space-between',
    },
    container: {
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderBottomColor:'#F0F0F0',
        height: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginBottom:10,
    },
    backAll:{
        width:60,
        height:30,
        flexDirection: 'row',
        alignItems:'flex-start',
    },
    back: {
        width:20,
        height:20,
        marginTop:7,
    },
    backwz: {
        marginTop:7,
        color: 'red',
    },
    info:{
        marginLeft:100,
        marginTop:7,
    },
    modifyPhoto:{
        height:70,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderTopColor:'#F0F0F0',
        borderBottomColor:'#F0F0F0',
        position:'relative',
        marginBottom:10
    },
    myself:{
        position:'absolute',
        top:15,
        left:320,
        width:40,
        height:40
    },
    modifyText:{
        position:'absolute',
        top:25,
        left:20,
        fontSize:12
    },
    rjt2:{
        width: 16,
        height: 16,
        position:'absolute',
        top:25,
        left:360
    },
    TotalSetting: {
        height:150,
        marginBottom:10
    },
    TotalSetting1:{
        height:30,
        borderWidth: 1,
        borderColor: '#fff',
        borderBottomColor:'#F0F1F2',
        backgroundColor:'#fff',
        justifyContent: 'center',
        position:'relative'
    },
    wz2: {
        position:'absolute',
        top:4,
        left:20,
        fontSize:12
    },
    rjt:{
        width: 16,
        height: 16,
        position:'absolute',
        top:4,
        left:360
    },
    SettingAddress:{
        height:40,
        borderWidth: 1,
        borderColor: '#fff',
        borderBottomColor:'#F0F1F2',
        backgroundColor:'#fff',
        justifyContent: 'center',
        position:'relative'
    },
    wz1: {
        position:'absolute',
        top:10,
        left:20,
        fontSize:12
    },
    rjt1:{
        width: 16,
        height: 16,
        position:'absolute',
        top:10,
        left:360
    },
});