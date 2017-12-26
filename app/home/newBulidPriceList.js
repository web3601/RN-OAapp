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

export default class newBulidPriceList extends Component {
    back() {
        this.props.navigation.goBack(null);
    }


    newBulid() {
        this.props.navigation.navigate('AddRss')
    }
    save(){
        alert('save');
    }


    render() {
        return (


            <View style={styles.ancestorCon}>
                {/*导航栏*/}
                <View style={styles.navCon}>
                    <TouchableHighlight

                        onPress={()=>this.back()}
                        underlayColor="#d5d5d5"
                    >
                        <View style={styles.navltys}>
                            <Image source={require('../imgs/navxy.png')}/>
                            <Text style={[styles.fSelf,styles.navltyszt]}>返回</Text>
                        </View>

                    </TouchableHighlight>
                    <Text style={styles.fSelf}>新建价格表</Text>
                    <TouchableHighlight

                        onPress={()=>this.save()}
                        underlayColor="#d5d5d5"
                    >
                        <View style={styles.navltys}>
                            <Text style={styles.navFont}>确定</Text>
                        </View>
                    </TouchableHighlight>

                </View>
                {/*内容主题*/}
                <ScrollView style={styles.childContent}>
                    <View style={[styles.common]}>
                        <Text>新建价格表</Text>
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({

    navltys: {
        //flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        //height: (Platform.OS === 'ios') ? 50 : 30,
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
    navCon: {//头部导航
        height: 35,
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
    navFont: {
        color: '#FC2E40'
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


});
