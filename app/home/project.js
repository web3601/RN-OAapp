/**
 * Created by Administrator on 2017/6/12.
 */
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

export default class Project extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    share() {
        this.props.navigation.navigate('Share')
    }

    filter() {
        alert('这是侧滑页面的按钮,因为不会做,静待...')
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
                            <Text style={[styles.fSelf,styles.navltyszt]}>取消</Text>
                        </View>

                    </TouchableHighlight>
                    <Text style={styles.fSelf}>我的项目</Text>
                    <TouchableHighlight
                        onPress={()=>this.filter()}
                        underlayColor="#A0A0A0"
                    >
                        <View style={styles.navltys}>
                            <Text style={[styles.fSelf,styles.navltyszt]}>筛选</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/*内容主题*/}
                <ScrollView style={styles.childContent}>
                    <Text>分享页面</Text>
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

});
