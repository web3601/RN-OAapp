/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableNativeFeedback,
    TouchableHighlight,
} from 'react-native';

export default class My extends Component {
    reportInfo(){
        this.props.navigation.navigate('Report')
    };
    op() {
        this.props.navigation.navigate('Info')
    };
    companyQuery(){
        this.props.navigation.navigate('WebViewExample')
    };
    companySetting(){
        this.props.navigation.navigate('CompanySetting')
        //alert("公司设置！");
    };
    selfSetting(){
        alert("个人设置！");
    };
    selfGrade(){
        alert("我的积分！");
    };
    selfSuccess(){
        alert("我的成就！");
    };
    explorde(){
        alert("推荐给朋友！");
    };
    render() {
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                    
                    <Text style={styles.myselfTop}>我的</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ancestorCon: {//祖先级容器
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    container: {
        //height: 40,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'flex-start',
        //backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderBottomColor:'#F0F0F0',
        //justifyContent: 'center',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 5
    },
    report:{
        paddingTop:3,
        width:20,
        height:20
    },
    myselfTop: {
        color:'black',
        fontSize:12,
        paddingTop:4,
        marginRight:180,
    },
    childContent: {//子容器页面级
        flex: 1
        //justifyContent: 'space-between',
    },
    topMoudel:{
        height:80,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#fff',
        position:'relative',
        borderBottomColor:'#F0F0F0'
    },
    myself:{
        position:'absolute',
        top:18,
        left:20,
        width:40,
        height:40
    },
    info:{
        fontSize:12,
        position:'absolute',
        top:20,
        left:65
    },
    mrjt:{
        width: 16,
        height: 16,
        position:'absolute',
        top:30,
        left:360
    },
    topDiv: {
        height: 230,
        backgroundColor:'#fff',
        margin: 10,
        marginLeft:0,
        marginRight:0,
        marginBottom:0,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    row:{
        flexDirection: 'row'
    },
    rowConCenter: {
        justifyContent: 'center'//居中
    },
    rowSpaceBetween: {
        justifyContent: 'space-between',//一行平均分布
        padding: 10
    },
    DIV: {
        height: 230,
        paddingLeft:10,
        paddingRight:15
    },
    DIVRowCon: {
        height: 70,
        borderBottomColor:'#F0F0F0',
        borderBottomWidth:1,
    },
    DIVImg: {
        marginBottom:5
    },
    DIVRowConDiv:{
        height:70,
        width:72,
        alignItems: 'center'
    },
    bottomSpace:{
        borderBottomColor:'#fff',
        borderBottomWidth:0,
    },
    CommerceQuery: {
        flex: 1,
        height:25,
        margin: 15,
        marginTop: 10,
        marginBottom:10,
        marginLeft:0,
        marginRight:0,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor:'#fff',
        position:'relative',
    },
    TotalSetting: {
        flex: 1
    },
    TotalSetting1:{
        height:25,
        borderWidth: 1,
        borderColor: '#fff',
        borderBottomColor:'#F0F1F2',
        backgroundColor:'#fff',
        justifyContent: 'center',
        position:'relative'
    },
    cx: {
        width: 20,
        height: 20,
        justifyContent: 'space-between',
        position:'absolute',
        top:1,
        left:3
    },
    sz: {//图标
        width: 16,
        height: 16,
        justifyContent: 'space-between',
        position:'absolute',
        top:2,
        left:3
    },
    wz: {
        position:'absolute',
        top:1,
        left:30
    },
    rjt:{
        width: 16,
        height: 16,
        position:'absolute',
        top:3,
        left:360
    }
});
