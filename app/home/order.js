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
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    renderTouchable,
} from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;


export default class Oreder extends Component {
    back() {
        this.props.navigation.goBack(null);
    }


    //newBulidOrder() {
    //    this.props.navigation.navigate('NewBulidOrder')
    //}
    goPage_add_xiansuo() {
        this.props.navigation.navigate('NewBulidOrder')
    };

    goPage_add_shangji() {
        //this.props.navigation.navigate('Add_shangji')
        alert('转战产品页面,复用订单没来得及创建')
    };

    constructor(props) {
        super(props);
        this.state = {modalVisible: false};
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    render() {
        return (





            <View style={styles.ancestorCon}>


                {/*导航栏*/}
                <View style={styles.nav}>
                    <TouchableHighlight
                        onPress={()=>this.back()}
                        underlayColor="#d5d5d5"
                    >
                        {/**/}
                        <View style={styles.navltys}>
                            <Image source={require('../imgs/navxy.png')}/>
                            <Text style={[styles.fSelf,styles.navltyszt]}>返回</Text>
                        </View>

                    </TouchableHighlight>
                    <Text style={[styles.fSelf,styles.selfPosCenter]}>我的订单</Text>

                    <TouchableOpacity
                        onPress={() => { this.setState({modalVisible: !this.state.modalVisible})}}
                        style={styles.navltys}
                    >
                        <Image style={[styles.navltysImg,styles.navltysImgPos]} source={require('../imgs/navtx.png')}/>
                    </TouchableOpacity>
                </View>

                <View>
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                        <TouchableWithoutFeedback
                            onPress={()=>this.setState({modalVisible: !this.state.modalVisible})}
                        >
                            <View style={{flex:1}}>
                                <View style={styles.model}></View>
                                <View style={styles.model_up}>
                                    <View style={styles.icon_san}>
                                        <Image style={styles.icon_2}
                                               source={require('../imgs/customer/background_san.png')}/>

                                    </View>
                                    <TouchableOpacity style={styles.model_up_in}
                                                      onPress={() => {this.setState({modalVisible: !this.state.modalVisible});this.goPage_add_xiansuo()}}>
                                        <Image style={styles.icon_}
                                               source={require('../imgs/customer/add_xiansuo.png')}/>
                                        <Text style={styles.text_color}> 手动新建</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.model_up_in,styles.model_up_border]}
                                                      onPress={() => {this.setState({modalVisible: !this.state.modalVisible});this.goPage_add_shangji()}}>
                                        <Image style={styles.icon_1}
                                               source={require('../imgs/customer/add_business.png')}/>
                                        <Text style={styles.text_color}> 复用订单</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>




                {/*内容主题*/}
                <ScrollView style={styles.childContent}>
                    <View style={[styles.common]}>
                        <Text>订单区域</Text>
                        <Text>
                            备注:
                        </Text>
                        <Text>
                            nav 的添加是要弹出一个下拉框才能再次点击进入一个页面(已于2017-6-14 10:33:24完成)
                        </Text>

                    </View>
                </ScrollView>

            </View>
        )
            ;
    }
}


const styles = StyleSheet.create({
    ancestorCon: {//body
        flex: 1,
        backgroundColor: '#EEEFF4'
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

    nav: {//祖先级-头部导航
        height: 40,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    navltysImgPos: {//私有级-设置定位
        position: 'absolute',
        right: 6,
    },
    selfPosCenter: {//私有级-设置居中
        width: screenW - 88,
        textAlign: 'center'
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
    navltysImg: {
        width: 24,
        height: 24
    },


    //nav右上角弹出菜单样式
    model: {
        width: 120,
        height: 90,
        position: 'absolute',
        right: 6,
        top: 55,
        backgroundColor: '#000',
        opacity: 0.6,
        borderRadius: 6
    },
    model_up: {
        width: 120,
        height: 130,
        position: 'absolute',
        right: 6,
        top: 55,

    },
    model_up_in: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    model_up_border: {
        borderBottomWidth: 0,
    },
    text_color: {
        color: '#fff',
        fontSize: 14
    },
    icon_: {
        width: 22,
        height: 22
    },
    icon_1: {
        width: 20,
        height: 20
    },
    icon_2: {
        width: 20,
        height: 11,
    },
    icon_san: {
        width: 25,
        height: 14,
        position: 'absolute',
        right: 5,
        top: -11,

    },


});
