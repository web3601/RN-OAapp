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
    Switch,
    Dimensions,
    TextInput,
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../public/css/css-com';
import ImagePicker from 'react-native-image-crop-picker';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import CheckBox from 'react-native-check-box'
export default class ChosseRange extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            value: false,
            text: '',

        };
    }

    onSelect(index, value) {
        this.setState({
            //text: `Selected index: ${index} , value: ${value}`
            text: ` ${value}`
        })
    }

    onClick(data) {

    }

    choosedpt() {
        alert('这是选择部门的')
    }

    chooseRangeSubmit() {
        alert('这是选择员工页面的提交按钮')
    }

    //onContentSizeChange(event) {
    //  this.setState({height: event.nativeEvent.contentSize.height});
    //}

    render(data) {
        return (


            <View style={styles.ancestorCon}>
                {/*导航栏*/}
                <View style={[styles.nav,com.AIC,]}>

                    <View style={[com.ROW,]}>
                        <TouchableHighlight
                            onPress={()=>this.back()}
                            underlayColor="#f3f3f3"
                            >
                            {/**/}
                            <View style={styles.navltys}>
                                <Image source={require('../imgs/navxy.png')}/>
                                <Text style={[styles.fSelf,styles.navltyszt]}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.back()}
                            underlayColor="#fff"
                            >
                            {/**/}
                            <View style={styles.navltys}>
                                <Text style={[styles.fSelf,styles.navltyszt,com.MGL10]}>关闭</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <Text style={[styles.fSelf,com.AIC,{left:-30}]}>
                        选择执行人
                    </Text>
                    <View style={styles.navltys}>
                        <Text style={[styles.fSelf,styles.navltyszt]}></Text>
                    </View>

                </View>
                {/*内容主题*/}

                {/*搜索*/}
                <View style={[com.BCKE6,com.pdt5l15]}>
                    <View style={[com.ROW,com.AIC,com.BCKFFF,com.PD5,com.BR]}>
                        <Image
                            style={[com.wh16,]} source={require('../imgs/search.png')}/>
                        <TextInput
                            style={[com.FS12,com.PDB0,com.PDT0,{height: 19,width:screenW*0.8,}]}
                            underlineColorAndroid={'transparent'}
                            placeholder='搜索'
                            secureTextEntry={false}
                            onChangeText={(ss) => this.setState({ss})} value={this.state.ss}
                            />
                    </View>
                </View>

                <View>

                </View>
                {/*公司或部门名称*/}
                <View style={[com.BCKF5,com.pdt5l15,com.BBW,com.BCE6]}>
                    <Text>按部门选择</Text>
                </View>
                <ScrollView style={[com.FLEX,com.BCKF5]}>
                    {/*员工区域*/}
                    <View style={[com.btwc]}>
                        <TouchableHighlight
                            onPress={()=>this.refs['item1'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item1"
                                        style={[com.flex,com.pdt15l20,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt10,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <View style={[com.br200,com.mgr5,com.bwd]}>
                                        <Image
                                            style={[com.br200,com.wh32]} source={require('../imgs/tx/txb1.png')}/>

                                    </View>
                                    <View style={[]}>
                                        <Text style={[com.fs12]}>东邪</Text>
                                        <Text style={[com.fs10]}>员工</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item2'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref='item2'
                                        style={[com.flex,com.pdt15l20,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt10,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <View style={[com.br200,com.mgr5,com.bwd]}>
                                        <Image
                                            style={[com.br200,com.wh32]} source={require('../imgs/tx/txb2.png')}/>

                                    </View>
                                    <View style={[]}>
                                        <Text style={[com.fs12]}>西毒</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item3'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item3"
                                        style={[com.flex,com.pdt15l20,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt10,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <View style={[com.br200,com.mgr5,com.bwd]}>
                                        <Image
                                            style={[com.br200,com.wh32]} source={require('../imgs/tx/txz1.png')}/>

                                    </View>
                                    <View style={[]}>
                                        <Text style={[com.fs12]}>南帝</Text>
                                        <Text style={[com.fs10]}>员工</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item4'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item4"
                                        style={[com.flex,com.pdt15l20,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt10,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <View style={[com.br200,com.mgr5,com.bwd]}>
                                        <Image
                                            style={[com.br200,com.wh32]} source={require('../imgs/tx/txz2.png')}/>

                                    </View>
                                    <View style={[]}>
                                        <Text style={[com.fs12]}>北丐</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.refs['item5'].onClick()}
                            underlayColor="#000000"
                            >
                            <View style={[com.bckfff,com.pos,com.pdb3,com.row,com.AIC]}>
                                <View>
                                    <CheckBox
                                        ref="item5"
                                        style={[com.flex,com.pdt15l20,com.pdl30,{zIndex:100}]}
                                        onClick={()=>{}}
                                        isChecked={false}
                                        checkedImage={<Image source={require('../imgs/selectnone.png')}/>}
                                        unCheckedImage={<Image source={require('../imgs/select.png')}/>}
                                        />
                                </View>

                                <View
                                    style={[com.aic,com.posr,com.row,com.pdt10,com.pdl40,com.mgl20,{width:screenW*0.90,paddingBottom:6},com.bbwc]}>
                                    <View style={[com.br200,com.mgr5,com.bwd]}>
                                        <Image
                                            style={[com.br200,com.wh32]} source={require('../imgs/tx/txz3.png')}/>

                                    </View>
                                    <View style={[]}>
                                        <Text style={[com.fs12]}>中神通</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>

                </ScrollView>
            </View >
        )
            ;
    }
}

const styles = StyleSheet.create({
    navltys: {
        //flex: 1,
        width: 50,
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
        //alignItems: 'flex-start',
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
        //flex: 1,
        //paddingLeft: 10,
        //paddingRight: 10,
        //paddingTop: 5,
        //paddingBottom: 5,
        //backgroundColor: '#fff',
    },


});
const sef = StyleSheet.create({
    imgSelfTwo: {
        width: 30,
        height: 30,
    },
    imgSelfFour: {//父级-块-图片和右上角的删除按钮容器
        position: 'relative',
    },
    imgSelfThree: {
        position: 'absolute',
        top: 0,
        right: -5
    },
    imgSelfFive: {
        width: 10,
        height: 10,
    },
    imgLefCom: {
        width: 16,
        height: 16
    },
});
