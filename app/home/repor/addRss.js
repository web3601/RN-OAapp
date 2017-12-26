/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
} from 'react-native';

export default class AddRss extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    share() {
        this.props.navigation.navigate('Share')
    }

    render() {
        return (
            <View style={styles.ancestorCon}>
                {/*导航栏*/}
                <View style={styles.nav}>
                    <TouchableHighlight
                        onPress={()=>this.back()}
                        underlayColor="#A0A0A0"
                    >
                        <View style={styles.navltys}>
                            <Image source={require('../../imgs/navxy.png')}/>
                            <Text style={[styles.fSelf,styles.navltyszt]}>报表</Text>
                        </View>

                    </TouchableHighlight>
                    <Text style={styles.fSelf}>订阅</Text>
                    <TouchableHighlight
                    >
                        <View style={styles.navltys}>
                        </View>

                    </TouchableHighlight>
                </View>
                {/*内容主题*/}
                <ScrollView style={styles.childContent}>
                    {/*已添加*/}
                    <View style={[styles.praentCom]}>
                        <View style={[styles.common]}>
                            {/*已添加*/}
                            <View style={[styles.smallNavCom]}>
                                <Text style={[styles.smallNavComFont]}>已添加</Text>
                                <Text style={[styles.smallNavComFont,styles.smallNavComFontSelf]}>(点击删除)</Text>
                            </View>
                            <View style={[styles.rowCon]}>
                                <Text style={[styles.fontCon,styles.fontConCorRed]}>拜访统计</Text>
                                <Text style={[styles.fontCon,styles.fontConCorRed]}>客户被拜访</Text>
                                <Text style={[styles.fontCon,styles.fontConCorRed]}>新增客户统计(全部)</Text>
                            </View>
                            <View style={[styles.rowCon]}>
                                <Text style={[styles.fontCon,styles.fontConCorRed]}>客户总量统计(全部)</Text>
                                <Text style={[styles.fontCon,styles.fontConCorRed]}>员工定位轨迹</Text>
                                <Text style={[styles.fontCon,styles.fontConCorRed]}>员工电子围栏</Text>
                            </View>
                        </View>
                        <View style={[styles.common]}>
                            {/*可添加*/}
                            <View style={[styles.smallNavCom]}>
                                <Text style={[styles.smallNavComFont]}>可添加</Text>
                            </View>
                            <View style={[styles.rowCon]}>
                                <Text style={[styles.fontCon,styles.fontConCorDefault]}>拜访统计</Text>
                                <Text style={[styles.fontCon,styles.fontConCorDefault]}>客户被拜访</Text>
                                <Text style={[styles.fontCon,styles.fontConCorDefault,styles.fontConCorDefaultClear]}></Text>
                            </View>

                        </View>
                    </View>
                    {/*未添加*/}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navltys: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: (Platform.OS === 'ios') ? 50 : 30,
        alignItems: 'center',
    },
    navltyszt: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#e4393c',
    },

    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    ancestorCon: {//祖先级容器
        flex: 1,
        backgroundColor: '#EEEFF4'
    },
    nav: {//头部导航
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    sz: {//导航图标
        width: 30,
        height: 30
    },
    fSelf: {//导航字体相关
        color: '#000',
        //height: 30,
        fontSize: 16
    },
    childContent: {
        flex: 1,
        backgroundColor: '#fff',
    },
//    内容主题部分
//    公共
    praentCom:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#EFEFEF',
        borderBottomColor: '#EFEFEF',
        paddingBottom:5,
    },
    common:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EFEFEF',
        //borderBottomColor: '#EFEFEF',
        //marginTop:5,
        marginBottom:5,
        paddingBottom:5,

    },
    rowCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,


    },
    fontCon: {
        flexDirection: 'row',

        textAlign: 'center',
        width: 110,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,

        fontSize: 10,
        borderRadius: 5,


    },
    fontConCorRed: {
        justifyContent: 'space-between',
        borderColor: '#F2B5B5',
        color: '#EC9191',
    },
    fontConCorDefault: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderColor: '#D8D8D8',
        color: '#A4A4A4',
    },
    fontConCorDefaultClear:{
        borderColor: '#fff',
        color: '#fff',
    },
    smallNavCom: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#EFEFEF',
        borderBottomColor: '#EFEFEF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',


    },
    smallNavComFont: {

    },
    smallNavComFontSelf: {
        flex: 1,
        fontSize: 10,
        color: '#CCCCCC',
    },

});
