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
    Dimensions,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    CheckBox,
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../../public/css/css-com';
import Modal from 'react-native-modal'
import wds from '../../public/css/css-window-single'
import ImagePicker from 'react-native-image-crop-picker';
export default class DailyDetailVisit extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        this.state = {
            bjjs: false,
            wos: false,
            imgArr: [],
            isModalVisible: false,
            show: false,
            input: '',
            id: 1,
        };
    }

    //完善拜访记录
    dailyDetailTaskCT() {
        this.props.navigation.navigate('DailyDetailTaskCT')
    }

    //删除
    goonDel(id) {
        //alert(id)
        var imgArr = this.state.imgArr;
        var op = [];
        //console.log('id+ ' + id)
        //console.log(imgArr)
        for (var i in imgArr) {
            //console.log(i)
            if (imgArr[i].id === id) {
                op.push(
                    {id: imgArr[i].id, visible: 'none', path: imgArr[i].path}
                )
            } else {
                op.push(
                    {id: imgArr[i].id, visible: imgArr[i].visible, path: imgArr[i].path}
                )
            }
        }
        this.setState({
            imgArr: op
        })
    }

    //图片上传
    openFloder() {
        this.setState({
            emoji: false
        })
        //alert('这是打开文件夹')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            //alert(this.state.id)
            this.state.imgArr.push({id: this.state.id, visible: null, path: image.path});
            this.setState({//放到这里只是为了渲染页面
                id: this.state.id + 1
            })
        });
    }

    //选择人员
    chooseRange() {
        this.props.navigation.navigate('ChooseRange')
    }

    render() {
        const { inputText } = this.state;

        let imgArr = this.state.imgArr;
        var list = [];
        for (var i = 0; i < imgArr.length; i++) {
            list.push(
                <View key={i} style={imgArr[i].visible?{display: imgArr[i].visible}:null}>
                    <View style={[com.pos]}>
                        <Image source={{uri: imgArr[i].path}} style={[com.MG5,com.wh64,com.pos]}/>
                        <TouchableHighlight
                            style={[com.MG5,com.posr,{top:-3,right:0}]}
                            onPress={this.goonDel.bind(this,imgArr[i].id)}
                            underlayColor="#f5f5f5"
                            >
                            <Image source={require('../../imgs/del162.png')} style={[com.wh16,]}/>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }
        return (
            <View style={[com.flex,com.bgcf5]}>
                {/*nav*/}
                <View style={[com.row,com.aic,com.jcsb,com.pdt5l15,com.bbwc,com.bgcfff]}>
                    <TouchableHighlight
                        onPress={()=>this.back()}
                        underlayColor="#ffffff"
                        >
                        <View style={[com.row,com.aic]}>
                            <Image
                                style={[com.tcr,com.wh16,]} source={require('../../imgs/jtxz.png')}/>
                            <Text style={[com.cr]}>返回</Text>
                        </View>
                    </TouchableHighlight>

                    <Text>任务详情</Text>

                    <Image
                        style={[com.tcr,com.wh32,com.mgr5]} source={require('../../imgs/slh.png')}/>
                </View>
                <ScrollView style={[com.flex,com.bgcf5]}>
                    <View style={[com.row,com.bgcfff,com.jcsb,com.pdt5l15,com.btweb,com.mgt5]}>
                        <View style={[com.bgcfff]}>
                            <View style={[com.row,]}>
                                <Text style={[{height:22,borderLeftWidth:2,borderColor:'#e4393c'}]}></Text>
                                <Text style={[com.mgr10,com.mgl10,com.fs16]}>任务报告</Text>
                                <View style={[com.aic,]}>
                                    <Text
                                        style={[com.cr,com.bwcd,com.br,com.fwb,com.fs10,com.pdl1,com.pdt1]}>详情</Text>
                                </View>
                            </View>
                            <View style={[com.row,com.aic,com.mgt10]}>
                                <Image
                                    style={[com.tcr,com.wh12,com.mgr5]} source={require('../../imgs/iconsj.png')}/>
                                <Text style={[com.fs10]}>07月10日</Text>
                                <Text style={[com.fs10,com.mglr5]}>周一</Text>
                                <Text style={[com.fs10]}>全天</Text>
                            </View>
                            <View style={[com.aic,com.jcc]}>
                                <Text style={[com.fs10,]}>重复时间:每天</Text>
                            </View>
                        </View>
                        <TouchableHighlight
                            onPress={()=>{this.setState({bjjs:!this.state.bjjs})}}
                            underlayColor="#fff"
                            >
                            <View style={[com.aic,com.wh64]}>

                                {this.state.bjjs == true ? (
                                <View style={[com.aic]}>
                                        <Image
                                            style={[com.tcbe,com.wh24,com.mgr5]}
                                            source={require('../../imgs/sc2.png')}/>
                                        <Text
                                            style={[com.cbe,com.fs10]}>标记结束</Text></View>
                                    ) : (<View style={[com.aic]}><Image
                                    style={[com.tcr,com.wh24,com.mgr5]} source={require('../../imgs/daily/sc2res.png')}/><Text
                                    style={[com.cbe,com.fs10]}>已结束</Text></View>)}

                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={[com.pdt20l15,com.bgcfff,com.bbwc]}>
                        <Text>测试</Text>
                    </View>
                    <TouchableHighlight
                        onPress={()=>this.chooseRange()}
                        underlayColor="#fff"
                        >
                        <View style={[com.row,com.jcsb,com.aic,com.pdt5l15,com.bgcfff,]}>
                            <Text>人员</Text>
                            <View style={[com.row,com.aic]}>
                                <Text>我自己</Text>
                                <Image
                                    style={[com.tcccc,com.wh16,]} source={require('../../imgs/jtxr.png')}/>
                            </View>
                        </View>

                    </TouchableHighlight>


                    <View style={[com.mixbgf3]}>
                        <Text style={[com.fs10,com.cbe]}>工作进展</Text>
                    </View>
                    <View style={[com.bgcfff,com.pdt5l15,com.bbweb,]}>

                        <Text style={[com.cbe,com.fs10]}>暂无拜访进展(这是无数据时显示)</Text>
                        <View style={[com.row,com.jcsb,com.aic]}>
                            <View style={[com.row]}>
                                <View style={[com.bwd,com.br200,com.mgr5]}>
                                    <Image
                                        style={[com.br200,com.wh32,]} source={require('../../imgs/tx/txz1.png')}/>
                                </View>
                                <View style={[com.aic,com.jcc]}>
                                    <Text>马小云</Text>
                                    <Text style={[com.fs10,com.cbe]}>拜访汇报</Text>
                                </View>
                            </View>
                            <Text style={[com.cbe,com.fs10]}>2017-7-20 14:30:26</Text>
                        </View>
                    </View>
                    <View style={[com.bgcfff,com.pdlr15,com.bbweb]}>
                        <View style={[com.pdtb5,com.bbweb]}>
                            <Text style={[com.cbe,com.fs10]}>拜访内容</Text>
                        </View>

                        <View style={[com.pdtb5]}>
                            <Text style={[]}>今日事今日毕</Text>
                        </View>

                        <View style={[com.pdtb5,com.bbweb]}>
                            <Text style={[com.cbe,com.fs10]}>接收人</Text>
                        </View>

                        <View style={[com.pdtb5]}>
                            <Text style={[]}>马小云,马晓云,马萧云</Text>
                        </View>

                    </View>

                    <View style={[com.btbweb,com.mgt5]}>
                        <View style={[com.row,com.jcsb,com.pdt10l15,com.bgcfff,com.bbweb]}>
                            <Text style={[com.cbe,com.fs12]}>共评论(0)</Text>
                            <TouchableOpacity onPress={() => {this.setState({wos: !this.state.wos});
               }}>
                                <Image style={[com.tcr,com.wh16]} source={require('../../imgs/chatres.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[com.bgcfff,com.pd15]}>
                            <Text style={[com.cab]}>
                                暂无评论
                            </Text>
                        </View>
                    </View>

                    {/*历史记录*/}
                    <View style={[com.bgcfff,com.mgt5,]}>
                        <View style={[com.pdt5l15,com.btbweb]}>
                            <Text style={[com.cbe]}>历史记录</Text>
                        </View>

                        <View style={[com.row,com.pdt10l15,com.bbweb]}>
                            <View style={[com.mgr5,com.aic]}>
                                <Text style={[com.cbe]}>07-10</Text>
                                <Text style={[com.cbe,com.fs12]}>09:01</Text>
                            </View>
                            <Text
                                style={[com.h3,com.mgt10,com.mgr10,com.mgl10,com.br200,{borderWidth:3,borderColor:'#378CF0'}]}></Text>
                            <View style={[com.aic]}>
                                <Text>尼大叶</Text>
                                <Text style={[com.fs10,com.mgt5]}>创建拜访</Text>
                            </View>
                        </View>

                        <View style={[com.row,com.pdt10l15,com.bbweb]}>
                            <View style={[com.mgr5,com.aic]}>
                                <Text style={[com.cbe]}>07-20</Text>
                                <Text style={[com.cbe,com.fs12]}>16:57</Text>
                            </View>
                            <Text
                                style={[com.h3,com.mgt10,com.mgr10,com.mgl10,com.br200,{borderWidth:3,borderColor:'#E15151'}]}></Text>
                            <View style={[com.aic]}>
                                <Text>威虎山</Text>
                                <Text style={[com.fs10,com.mgt5]}>接受拜访</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>

                {this.state.bjjs == true ? (<TouchableHighlight
                    onPress={()=>{this.dailyDetailTaskCT()}}
                    underlayColor="#fff"
                    >
                    <View style={[com.aic,com.bgcfff,com.pd10,com.btweb]}>
                        <Text style={[com.cr]}>开始工作</Text>
                    </View></TouchableHighlight>) : ( null)}


                {/* 添加模型-事件评论*/}
                <View>
                    <Modal
                        backdropOpacity={0}
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.wos}
                        onRequestClose={() => {this.setState({wos: !this.state.wos});}}
                        >
                        <View style={{width:screenW,height:screenH,backgroundColor:'#555',opacity:0}}>
                            <TouchableOpacity style={{flex:1,height:screenH}} onPress={() => {
  this.setState({wos: this.state.wos});
}}></TouchableOpacity>
                        </View>
                        <View style={[com.bgcfff,com.brtlr5,wds.pos,com.pdt5,com.pdl5,com.pdb5]}>
                            <View style={[com.row,com.jcsb,com.aic,com.ww98]}>
                                <TouchableOpacity style={[com.pdtb5,]}
                                                  onPress={() => { this.openFloder()}}>
                                    <Image style={[com.tcr,com.wh32,com.tcccc]}
                                           source={require('../../imgs/tpslt.png')}/>
                                </TouchableOpacity>
                                <View style={[com.bwc9,com.br]}>
                                    <TextInput
                                        style={[{width:screenW*0.75},com.h30,com.pd5,com.bwc]}
                                        underlineColorAndroid='transparent'
                                        numberOfLines={1}
                                        autoFocus={true}
                                        multiline={false}
                                        textAlignVertical="top"
                                        placeholder='请输入文本'
                                        placeholderTextColor='#abc'
                                        secureTextEntry={false}
                                        onChangeText={(text) => this.setState({inputText: text})}
                                        value={inputText}
                                        />

                                </View>


                                <Text style={[com.bgcr,com.cff,com.pd5,com.br]}>发送</Text>
                            </View>
                            <View style={[com.row,com.ww,com.flww,com.pdl5]}>
                                {list}
                            </View>


                        </View>
                    </Modal>
                </View>

            </View>
        )
    }
}

