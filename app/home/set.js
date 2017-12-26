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
    Image,
    TouchableHighlight,
    Platform,
    ScrollView,
    Switch,
} from 'react-native';

export default class Set extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            value: false

        };
    }

    render() {
        return (
            <View style={styles.container}>

                {/*导航栏*/}
                <View style={styles.nav}>
                    <TouchableHighlight
                        onPress={()=>this.back()}
                        underlayColor="#A0A0A0"
                    >
                        <View style={styles.navltys}>
                            <Image source={require('../imgs/navxy.png')}/>
                            <Text style={[styles.fSelf,styles.navltyszt]}>返回</Text>
                        </View>

                    </TouchableHighlight>
                    <Text style={styles.fSelf}>首页设置</Text>
                    <TouchableHighlight
                        onPress={()=>this.share()}
                        underlayColor="#A0A0A0"
                    >
                        <View style={styles.navltys}>
                            <Text style={[styles.fSelf,styles.navltyszt]}>保存</Text>
                        </View>

                    </TouchableHighlight>
                </View>
                {/*内容部分*/}
                <ScrollView style={styles.controlScrollCon}>
                    <View style={[styles.maxScollCon]}>
                        <View style={[styles.divCon]}>
                            <View style={[styles.rowTitCon]}>
                                <Text style={[styles.titFontCon]}>首页报表(拖动排序)</Text>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>订单</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>业绩对比</Text>
                                    <Text style={[styles.fontSelf]}>本月、本季度、本年度与历史业绩对比</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />

                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>销售漏斗</Text>
                                    <Text style={[styles.fontSelf]}>本月销售漏斗</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />

                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>目标达成</Text>
                                    <Text style={[styles.fontSelf]}>本月目标达成</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />

                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.divCon]}>
                            <View style={[styles.rowTitCon]}>
                                <Text style={[styles.titFontCon]}>首页应用(拖动排序)</Text>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>商机</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                <Switch
                                    style={[styles.switchCon]}
                                    //动态改变value
                                    value={this.state.value}
                                    //当切换开关室回调此方法
                                    onValueChange={(value)=>{this.setState({value: value})}}
                                />
                                <Image source={require('../imgs/menu32.png')}/>
                            </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>理单</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>合同</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>订单</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>报表</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>目标</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>审批</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>日志</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>必达</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>公告</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>考勤</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>线路拜访</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>线路拜访</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>项目</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>价格表</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>产品</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>

                        </View>
                        <View style={[styles.divCon]}>
                            <View style={[styles.rowTitCon]}>
                                <Text style={[styles.titFontCon]}>首页信息(拖动排序)</Text>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>今日日程</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>重点关注</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                            <View style={[styles.rowCon,styles.pageRowSelf]}>
                                <View>
                                    <Text>待审批</Text>
                                </View>
                                <View style={[styles.rowCon]}>
                                    <Switch
                                        style={[styles.switchCon]}
                                        //动态改变value
                                        value={this.state.value}
                                        //当切换开关室回调此方法
                                        onValueChange={(value)=>{this.setState({value: value})}}
                                    />
                                    <Image source={require('../imgs/menu32.png')}/>
                                </View>
                            </View>
                        </View>

                    </View>
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


//    内容范围开始
    controlScrollCon: {
        flex: 1
    },
    maxScollCon: {},
    rowCon: {//行级元素左浮动
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pageRowSelf: {
        borderBottomWidth: 1,
        borderBottomColor: '#EDEFF0',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    specialCon: {
        marginRight: 5,
    },
    switchCon: {
        //tintColor: '#e4393c'
    },
    rowTitCon: {
        borderBottomWidth: 1,
        borderBottomColor: '#EDEFF0',

        backgroundColor: '#F5F5F5',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    titFontCon: {
        fontSize: 10,
    },
    fontSelf: {
        fontSize: 12,
        marginTop: 10,
        color: '#AEAEAE'
    },
});
