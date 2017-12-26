/**
 * Created by Administrator on 2017/6/12.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
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
                    <Text style={styles.info}>公司名称</Text>
                    <Text style={styles.setInfo}>设置</Text>
                </View>
                <ScrollView style={styles.childContent}>
                    <View style={styles.searchInfo}>
                        <Image  style={styles.searchPhoto} source={require('../imgs/search.png')}/>
                        <Text  style={styles.wz}>员工姓名/职位/角色</Text>
                    </View>
                    <View style={styles.container}></View>
                    <View style={styles.container}></View>
                    <View style={styles.container}></View>
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
    setInfo:{
        color:'red',
        marginLeft:130,
        marginTop:7,
        fontSize:14,
    },
    childContent: {//子容器页面级
        flex: 1
        //justifyContent: 'space-between',
    },
    searchInfo:{
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#fff',
        height:30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:5,
    },
    searchPhoto:{
        width:15,
        height:15,
        marginLeft:120,
        marginRight:10,
    },
    wz:{
        fontSize:12,
    },

});