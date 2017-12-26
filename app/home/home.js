import React, { Component } from 'react';
import { AppRegistry,
    ListView,
    StyleSheet,
    View,
    Text,
    Button,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper';


export default class Home extends Component {
    //报表
    op() {
        this.props.navigation.navigate('Report')
    }

    //设置
    set() {
        this.props.navigation.navigate('Set')
    }

    //商机
    business() {
        //this.props.navigation.navigate('Business'),
        this.props.navigation.navigate('BusinessTest')
    }

    //理单
    sheet() {
        this.props.navigation.navigate('Sheet')
    }

    //合同
    contract() {
        this.props.navigation.navigate('Contract')
    }

    //订单
    order() {
        this.props.navigation.navigate('Order')
    }

    //目标
    aim() {
        this.props.navigation.navigate('Aim')
    }

    //审批
    approval() {
        this.props.navigation.navigate('Approval')
    }

    //日志
    log() {
        this.props.navigation.navigate('Log')
    }

    //必达
    mustreach() {
        this.props.navigation.navigate('Mustreach')
    }

    //公告
    notice() {
        this.props.navigation.navigate('Notice')
    }

    //考勤
    attendance() {
        this.props.navigation.navigate('Attendance')
    }

    //线路拜访
    lineVisit() {
        this.props.navigation.navigate('LineVisit')
    }

    //项目
    project() {
        this.props.navigation.navigate('Project')
    }

    //产品
    product() {
        this.props.navigation.navigate('Product')
    }

    //价格表
    priceList() {
        this.props.navigation.navigate('PriceList')
    }

    render() {
        return (
            <View style={styles.ancestorCon}>
                {/*头部导航*/}
                <View style={styles.nav}>
                    <TouchableHighlight
                        onPress={()=>this.op()}
                        underlayColor="#A0A0A0"
                    >
                        <Image style={styles.sz} source={require('../imgs/bb.png')}/>
                    </TouchableHighlight>
                    <Text style={styles.fSelf}>首页</Text>
                    <TouchableHighlight
                        onPress={()=>this.set()}
                        underlayColor="#A0A0A0"
                    >
                        <Image style={styles.sz} source={require('../imgs/sz.png')}/>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.childContent}>
                    {/*顶部滚动模块*/}

                    <Swiper style={styles.wrapper} height={200}>
                        <View style={[styles.topDiv]}>
                            {/*块级导航*/}
                            <View style={[styles.rowCon,styles.rowCon,styles.rowConFlexStart]}>
                                <View>
                                    <Text style={styles.bestMark}>最新业绩</Text>
                                </View>
                                <View style={[styles.rowCon,styles.floatLeft]}>
                                    <Text style={[styles.rowConCommonSize,styles.rowConCommonColor]}>本月</Text>
                                    <Text style={[styles.rowConCommonText,styles.rowConCommonSize]}>本季度</Text>
                                    <Text style={styles.rowConCommonSize}>本年度</Text>
                                </View>
                            </View>
                            {/*块级中间部分-业绩*/}
                            <View style={[styles.rowCon,styles.rowConSpaceBetween]}>
                                <View>
                                    <Text style={[styles.textAlignCenter,styles.textMarginBottom15]}>0</Text>
                                    <Text style={[styles.textFontSize11]}>已确认回款(万)</Text>
                                </View>
                                <View>
                                    <Text
                                        style={[styles.textAlignCenter,styles.textMarginBottom15,styles.textFontSize30,styles.textTop]}>0</Text>
                                    <Text style={[styles.textTop,styles.textFontSize18]}>总业绩(万)</Text>
                                </View>
                                <View>
                                    <Text style={[styles.textAlignCenter,styles.textMarginBottom15]}>0</Text>
                                    <Text style={[styles.textFontSize11]}>未确认回款(万)</Text>
                                </View>
                            </View>
                            {/*块级底部部分-居中-目标:0(万)*/}
                            <View style={[styles.rowCon,styles.rowConCenter]}>
                                <Text style={[styles.textMarginBottom20]}>目标:0(万)</Text>
                            </View>

                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>

                    {/*中间图标导航模块*/}
                    <View style={[styles.DIV]}>
                        <View style={[styles.DIVRowCon,styles.row,styles.rowSpaceBetween]}>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.business()}
                                underlayColor="#f5f5f5"
                            >

                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/sj32.png')}/>
                                    <Text>商机</Text>
                                </View>

                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.sheet()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/ld32.png')}/>
                                    <Text>理单</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.contract()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/ht32.png')}/>
                                    <Text>合同</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.order()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/dd32.png')}/>
                                    <Text>订单</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={[styles.DIVRowCon,styles.row,styles.rowSpaceBetween]}>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.op()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/bb32i.png')}/>
                                    <Text>报表</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.aim()}
                                underlayColor="#f5f5f5"
                            >
                                <View style={[styles.DIVRowConDiv]}>
                                    <Image style={styles.DIVImg} source={require('../imgs/mb32.png')}/>
                                    <Text>目标</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.approval()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/gz32.png')}/>
                                    <Text>审批</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.log()}
                                underlayColor="#f5f5f5"
                            >
                                <View style={[styles.DIVRowConDiv]}>
                                    <Image style={styles.DIVImg} source={require('../imgs/rz32.png')}/>
                                    <Text>日志</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={[styles.DIVRowCon,styles.row,styles.rowSpaceBetween]}>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.mustreach()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={[styles.DIVImg,{tintColor:'#e4393c'}]} source={require('../imgs/bd32.png')}/>
                                    <Text>必达</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.notice()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/gg32.png')}/>
                                    <Text>公告</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.attendance()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/kq32.png')}/>
                                    <Text>考勤</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.lineVisit()}
                                underlayColor="#f5f5f5"
                            >
                                <View style={[styles.DIVRowConDivSelf]}>
                                    <Image style={styles.DIVImg} source={require('../imgs/xlbf32.png')}/>
                                    <Text>线路拜访</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={[styles.DIVRowCon,styles.row,styles.rowSpaceBetween]}>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.project()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/xm32.png')}/>
                                    <Text>项目</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.product()}
                                underlayColor="#f5f5f5"
                            >
                                <View>
                                    <Image style={styles.DIVImg} source={require('../imgs/cp32.png')}/>
                                    <Text>产品</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.DIVRowConDiv]}
                                onPress={()=>this.priceList()}
                                underlayColor="#f5f5f5"
                            >
                                <View style={[styles.DIVRowConDivSelf]}>
                                    <Image style={[styles.DIVImg,styles.DIVImgSelf]}
                                           source={require('../imgs/jgb32.png')}/>
                                    <Text>价格表</Text>
                                </View>
                            </TouchableHighlight>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg}/>
                                <Text></Text>
                            </View>

                        </View>

                    </View>

                    {/*底部三大功能模块*/}
                    <View style={[styles.threeDIVCON]}>
                        {/*今日日程*/}
                        {/*头部*/}
                        <View style={[styles.threeSpaceBetween,styles.row]}>
                            <Text
                                style={[styles.borderLeft,styles.paddingLeft,styles.threeDIVCONTITHei,styles.threeDIVCONTITSiz]}>今日日程</Text>
                            <View style={[styles.threeSpaceBetween,styles.row]}>
                                <Text style={[styles.threeDIVCONTITSiz,styles.threeDIVCONTITPadR]}>导航</Text>
                                <Image source={require('../imgs/threefj32.png')}/>
                            </View>
                        </View>
                        {/*内容*/}
                        <View style={[styles.threeTwoCenter]}>
                            <View style={[styles.row]}>
                                <Image source={require('../imgs/rc16.png')}/>
                                <Text style={[styles.threeText]}>
                                    您今天还没有日程
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.threeDIVCON]}>
                        {/*重点关注*/}
                        {/*头部*/}
                        <View style={[styles.row]}>
                            <Text
                                style={[styles.borderLeft,styles.paddingLeft,styles.threeDIVCONTITHei,styles.threeDIVCONTITSiz]}>重点关注</Text>
                        </View>
                        {/*内容*/}
                        <View style={[styles.threeTwoCenter]}>
                            <View style={[styles.row]}>
                                <Image source={require('../imgs/gcon16.png')}/>
                                <Text style={[styles.threeText]}>
                                    您还没有关注客户的动态
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.threeDIVCON]}>
                        {/*待审批*/}
                        {/*头部*/}
                        <View style={[styles.row]}>
                            <Text
                                style={[styles.borderLeft,styles.paddingLeft,styles.threeDIVCONTITHei,styles.threeDIVCONTITSiz]}>待审批</Text>
                        </View>
                        {/*内容*/}
                        <View style={[styles.threeTwoCenter]}>
                            <View style={[styles.row]}>
                                <Image source={require('../imgs/gcon16.png')}/>
                                <Text style={[styles.threeText]}>
                                    您没有待审批的内容
                                </Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>

            </
                View >

        )
            ;

    }
}
;

const styles = StyleSheet.create({
    ancestorCon: {//祖先级容器
        flex: 1,
        backgroundColor: '#EEEFF4'
    },
    nav: {//头部导航
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#EA3B49',
        padding: 5
    },
    sz: {//导航图标
        width: 30,
        height: 30
    },
    fSelf: {//导航字体相关
        color: '#fff',
        height: 30,
        fontSize: 20
    },
    childContent: {//子容器页面级
        flex: 1,

        //justifyContent: 'space-between',
    },
    topDiv: {
        height: 170,
        backgroundColor: '#fff',
        //width: 290,

        margin: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fcf',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    row: {//行级布局
        flexDirection: 'row',
    },
    rowCon: {//行级元素左浮动
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    rowConFlexStart: {//左浮动
        justifyContent: 'flex-start',//左浮动
    },
    rowConSpaceBetween: {//公共级平均分布
        justifyContent: 'space-between',//一行平均分布
        padding: 10,
        marginTop: 10
    },
    rowSpaceBetween: {//平均分布
        justifyContent: 'space-between',//一行平均分布
        //alignItems: 'center',
        padding: 10,
    },
    rowConCenter: {//公共级分布
        justifyContent: 'center',//居中
    },
    bestMark: {
        backgroundColor: '#FF7C7C',
        color: '#fff',
        borderRadius: 3,
        padding: 3
    },
    floatLeft: {
        borderWidth: 1,
        borderColor: '#fcf',
        borderRadius: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 12,
        paddingRight: 12,
        marginLeft: 5

    },
    rowConCommonText: {
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        borderLeftWidth: 1,
        borderColor: '#D0D0D0',
        borderRightWidth: 1,

    },
    rowConCommonSize: {
        fontSize: 12
    },
    rowConCommonColor: {
        color: '#000'
    },
    textAlignCenter: {
        textAlign: 'center',
        color: '#FF5362'
    },
    textMarginBottom15: {
        marginBottom: 5
    },
    textFontSize30: {
        fontSize: 30
    },
    textTop: {
        top: -15
    },
    textFontSize18: {
        fontSize: 18
    },
    textFontSize11: {
        fontSize: 11
    },
    textMarginBottom20: {
        marginBottom: 20
    },
    //图标导航部分
    DIV: {//祖先级-区域
        height: 350,
        paddingLeft: 10,
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    DIVRowCon: {//祖级-行
        height: 50,
        marginBottom: 37
    },

    DIVRowConDiv: {//父级-块-上图下文
        height: 60,
        width: 72,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    DIVImg: {//子级-图片
        marginBottom: 5,
    },
    DIVRowConDivSelf: {//私有-控制大于等于三个字的图片居中
        justifyContent: 'center',
        alignItems: 'center',
    },

    //三大功能模块区域
    //公共部分
    //height,marginTop/bottom,bgcolor
    threeDIVCON: {
        height: 100,
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
    },
    threeTwoCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    threeSpaceBetween: {
        justifyContent: 'space-between',//一行平均分布
    },
    borderLeft: {
        borderLeftWidth: 2,
        borderLeftColor: '#7D7D7D',
    },
    paddingLeft: {
        paddingLeft: 15
    },
    threeDIVCONTITHei: {
        height: 14,
        top: -1
    },
    threeDIVCONTITSiz: {
        fontSize: 12,
    },
    threeDIVCONTITPadR: {
        paddingRight: 3
    },
    threeText: {
        fontSize: 12,
        color: '#D0D0D0',
        marginLeft: 5
    },


    //滑动组件样式
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

});
