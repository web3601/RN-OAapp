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

export default class Report extends Component {
    back() {
        this.props.navigation.goBack(null);
    }


    addRss() {
        this.props.navigation.navigate('AddRss')
    }

    statVist() {
        this.props.navigation.navigate('StatVist')
    }

    clientByVist() {
        this.props.navigation.navigate('ClientByVist')
    }

    addClient() {
        this.props.navigation.navigate('AddClient')
    }

    clientGross() {
        this.props.navigation.navigate('ClientGross')
    }

    employeeLocation() {
        this.props.navigation.navigate('EmployeeLocation')
    }
    employeeRail() {
        this.props.navigation.navigate('EmployeeRail')
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
                            <Text style={[styles.fSelf,styles.navltyszt]}>返回</Text>
                        </View>

                    </TouchableHighlight>
                    <Text style={styles.fSelf}>报表</Text>
                    <TouchableHighlight
                        onPress={()=>this.addRss()}
                        underlayColor="#A0A0A0"
                    >
                        <View style={styles.navltys}>
                            <Image style={styles.imgComself} source={require('../../imgs/navtx.png')}/>
                        </View>

                    </TouchableHighlight>
                </View>
                {/*内容主题*/}
                <ScrollView style={styles.childContent}>
                    <View style={[styles.common]}>
                        <TouchableHighlight
                            onPress={()=>this.statVist()}
                            underlayColor="#A0A0A0"
                        >
                            <View style={[styles.rowCon]}>
                                {/*左边部分:图片+文字*/}
                                <View style={[styles.childCon]}>
                                    <Image style={[styles.imgCon]} source={require('../../imgs/report/khtj32.png')}/>
                                    <Text>拜访统计</Text>
                                </View>
                                {/*右边部分:箭头图标*/}
                                <View>
                                    <Image source={require('../../imgs/report/xyjt16.png')}/>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.clientByVist()}
                            underlayColor="#A0A0A0"
                        >
                            <View style={[styles.rowCon]}>
                                {/*左边部分:图片+文字*/}
                                <View style={[styles.childCon]}>
                                    <Image style={[styles.imgCon]} source={require('../../imgs/report/xzkh32.png')}/>
                                    <Text>客户被拜访</Text>
                                </View>
                                {/*右边部分:箭头图标*/}
                                <View>
                                    <Image source={require('../../imgs/report/xyjt16.png')}/>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.addClient()}
                            underlayColor="#A0A0A0"
                        >
                            <View style={[styles.rowCon]}>
                                {/*左边部分:图片+文字*/}
                                <View style={[styles.childCon]}>
                                    <Image style={[styles.imgCon]} source={require('../../imgs/report/xzkh32.png')}/>
                                    <Text>新增客户统计</Text>
                                </View>
                                {/*右边部分:箭头图标*/}
                                <View>
                                    <Image source={require('../../imgs/report/xyjt16.png')}/>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.clientGross()}
                            underlayColor="#A0A0A0"
                        >
                            <View style={[styles.rowCon]}>
                                {/*左边部分:图片+文字*/}
                                <View style={[styles.childCon]}>
                                    <Image style={[styles.imgCon]} source={require('../../imgs/report/khzl32.png')}/>
                                    <Text>客户总量统计</Text>
                                </View>
                                {/*右边部分:箭头图标*/}
                                <View>
                                    <Image source={require('../../imgs/report/xyjt16.png')}/>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.employeeLocation()}
                            underlayColor="#A0A0A0"
                        >
                            <View style={[styles.rowCon]}>
                                {/*左边部分:图片+文字*/}
                                <View style={[styles.childCon]}>
                                    <Image style={[styles.imgCon]} source={require('../../imgs/report/ygdw32.png')}/>
                                    <Text>员工定位轨迹</Text>
                                </View>
                                {/*右边部分:箭头图标*/}
                                <View>
                                    <Image source={require('../../imgs/report/xyjt16.png')}/>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.employeeRail()}
                            underlayColor="#A0A0A0"
                        >
                            <View style={[styles.rowCon]}>
                                {/*左边部分:图片+文字*/}
                                <View style={[styles.childCon]}>
                                    <Image style={[styles.imgCon]} source={require('../../imgs/report/dzwl.png')}/>
                                    <Text>员工电子围栏</Text>
                                </View>
                                {/*右边部分:箭头图标*/}
                                <View>
                                    <Image source={require('../../imgs/report/xyjt16.png')}/>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({
    imgComself:{
        width:24,
        height:24,
    },
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
//    主题内容
    childContent: {//子容器页面级
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#fff',
    },
//    公共行级元素
    common: {
        flex: 1,
    },
    rowCon: {
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F4F5F6',
        backgroundColor: '#fff',

    },
    childCon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgCon: {
        marginRight: 10
    },

});
