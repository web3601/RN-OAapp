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
} from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../../public/css/css-com';
import Modal from 'react-native-modal'
import wds from '../../public/css/css-window-single'
import ImagePicker from 'react-native-image-crop-picker';
import EmojiPanel from 'react-native-emoji-panel';
export default class Log extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      imgArr: [],
      isModalVisible: false,
      show: false,
      input: '',
      wos: false,
      id: 1,
      emoji:false,
    };
  }

  setVisibleModal(visible) {
    this.setState({show: visible});
  }

  setWosModal(visible) {
    this.setState({wos: visible});
  }

  state = {
    isModalVisible: false,
    showPicker: true,
  }

  _showModal = () => this.setState({isModalVisible: true})

  goPage_customerAdd() {
    this.props.navigation.navigate('Share')
  }

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

  openLg() {
    this.setState({
      emoji: true,
      imgArr:[],
      op:[],
    })
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

      <View style={styles.ancestorCon}>

        {/*导航栏*/}
        <View style={[styles.navCon,com.aic]}>
          <TouchableHighlight
            style={styles.navltys}
            onPress={()=>this.back()}
            underlayColor="#d5d5d5"
          >
            <View style={styles.navltys}>
              <Image source={require('../../imgs/navxy.png')}/>
              <Text style={[styles.fSelf,styles.navltyszt]}>返回</Text>
            </View>

          </TouchableHighlight>


          <Text style={styles.fSelf}>日报详情页</Text>
          <TouchableOpacity onPress={() => {this.setState({show: !this.state.show})}}>
            <Image source={require('../../imgs/product/slh32.png')}/>
          </TouchableOpacity>

        </View>


        <ScrollView style={[]}>

          {/*个人信息*/}
          <View style={[com.mixf,com.mgtb5]}>
            <View>
              <View style={[com.bwcd,com.br200,com.mgr15]}>
                <Image style={[com.wh48,com.br200]} source={require('../../imgs/tx/txb1.png')}/>
              </View>
            </View>
            <View style={[]}>
              <Text>姓名</Text>
              <Text>2017-6-29 17:13:24</Text>
            </View>
          </View>

          {/*详情*/}
          <View style={[com.bgcfff,com.btbwc,com.pdl15,com.pdb5]}>
            <View style={[com.pdtb5,com.bbwc]}>
              <Text style={[com.cbe,com.fs12]}>今日完成工作</Text>
              <Text>6</Text>
            </View>
            <View style={[com.pdtb5,com.bbwc]}>
              <Text style={[com.cbe,com.fs12]}>未完成工作</Text>
              <Text>6</Text>
            </View>
            <View style={[com.pdtb5,com.bbwc]}>
              <Text style={[com.cbe,com.fs12]}>需协调工作</Text>
              <Text>6</Text>
            </View>
            <View style={[com.pdtb5,com.bbwc]}>
              <Text style={[com.cbe,com.fs12]}>备注</Text>
              <Text>6</Text>
            </View>
            <View style={[com.pdtb5]}>
              <Text style={[com.cbe,com.fs12]}>照片</Text>
              <Image style={[com.wh128]} source={require('../../imgs/jzytp.png')}/>
            </View>
          </View>

          {/*共评论*/}
          <View style={[com.bgcff,com.mgt5,com.btbwc]}>

            <View style={[com.row,com.bbwc,com.jcsb,com.aic,com.pdt5l15]}>
              <Text>共评论(0)</Text>

              <TouchableOpacity onPress={() => {this.setState({wos: !this.state.wos});
               }}>
                <Image style={[com.tcr,com.wh16]} source={require('../../imgs/chatres.png')}/>
              </TouchableOpacity>
            </View>

            <View style={[com.pdt5l15]}>

              {/*<Text style={[com.fs12,com.cbe]}>暂无评论</Text>*/}

              <View style={[com.row,com.mgt5]}>
                <View>
                  <View style={[com.bwcd,com.br200,com.row]}>
                    <Image style={[com.wh32,com.br200]} source={require('../../imgs/tx/txz1.png')}/>
                  </View>
                </View>
                <View style={[com.mgl15,com.flex,com.bbwc,com.mgb5]}>

                  <View style={[com.row,com.jcsb,com.mgb5]}>
                    <Text style={[com.cbe]}>阿拉伯</Text>
                    <Text style={[com.cbe]}>7-5 11:07:05</Text>
                  </View>

                  <View style={[com.mgb10]}>
                    <Text>天王盖地虎,宝塔镇河妖</Text>
                  </View>

                  <View style={[com.row]}>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/txs.png')}/>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                  </View>

                </View>

              </View>

              <View style={[com.row,com.mgt5]}>
                <View>
                  <View style={[com.bwcd,com.br200,com.row]}>
                    <Image style={[com.wh32,com.br200]} source={require('../../imgs/tx/txz2.png')}/>
                  </View>
                </View>

                <View style={[com.mgl15,com.flex,com.bbwc,com.mgb5]}>

                  <View style={[com.row,com.jcsb,com.mgb5]}>
                    <Text style={[com.cbe]}>阿拉伯</Text>
                    <Text style={[com.cbe]}>7-5 11:07:05</Text>
                  </View>

                  <View style={[com.mgb10]}>
                    <Text>天王盖地虎,宝塔镇河妖</Text>
                  </View>

                  <View style={[com.row]}>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                  </View>

                </View>

              </View>

              <View style={[com.row,com.mgt5]}>
                <View>
                  <View style={[com.bwcd,com.br200,com.row]}>
                    <Image style={[com.wh32,com.br200]} source={require('../../imgs/tx/txz3.png')}/>
                  </View>
                </View>

                <View style={[com.mgl15,com.flex,com.bbwc,com.mgb5]}>

                  <View style={[com.row,com.jcsb,com.mgb5]}>
                    <Text style={[com.cbe]}>阿拉伯</Text>
                    <Text style={[com.cbe]}>7-5 11:07:05</Text>
                  </View>

                  <View style={[com.mgb10]}>
                    <Text>天王盖地虎,宝塔镇河妖</Text>
                  </View>

                  <View style={[com.row]}>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                    <Image style={[com.wh64,com.mg5]} source={require('../../imgs/jzytp.png')}/>
                  </View>

                </View>

              </View>


            </View>
          </View>

          {/*工作记录*/}
          <View>
            {/*标题*/}
            <View style={[com.row,com.jcc,com.mgt15,com.mgb5]}>
              <View style={[com.bgce6,com.pdt5l10,com.br]}>
                <Text style={[com.cbe,com.fs12]}>xxx的工作记录</Text>
              </View>
            </View>

            <View style={[com.pdlr15]}>
              <View>
                <View style={[com.bgce6,com.pd5,com.br,com.w80,com.aic]}>
                  <Text style={[com.cbe,com.fs12]}>下午 5:00</Text>
                </View>
                <Text style={[com.cbe,{top:-5},com.pdl30]}>|</Text>
              </View>

              <View>
                <View style={[com.row,{top:-9},com.bgcfff,com.pdt5l15,com.bwc,com.br5]}>
                  <View>
                    <View style={[com.br200,com.bwcd,com.mgr15]}>
                      <Image style={[com.wh32,com.br200]} source={require('../../imgs/tx/txz3.png')}/>
                    </View>

                  </View>
                  <View style={[]}>
                    <Text>姓名</Text>
                    <Text>2017-6-29 17:13:24</Text>
                  </View>
                </View>
              </View>
            </View>


          </View>

        </ScrollView>
        {/*底部通栏*/}
        <View style={[com.row,com.bgcfff,com.jcsa,com.btwc]}>
          <TouchableHighlight
            style={styles.navltys}
            onPress={()=>alert('这是上一封')}
            underlayColor="#f5f5f5"
          >
            <View style={[com.pdt15,com.bckfff,com.btwc,com.pdb5,com.aic,com.jcc]}>
              <Image style={[com.wh16,com.mgr5]} source={require('../../imgs/downdirect.png')}/>
              <Text style={[com.cr]}>上一封</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navltys}
            onPress={()=>alert('这是下一封')}
            underlayColor="#f5f5f5"
          >
            <View style={[com.pdt15,com.bckfff,com.btwc,com.pdb5,com.aic,com.jcc]}>
              <Image style={[com.wh16,com.mgr5,com.tcr]} source={require('../../imgs/updirect.png')}/>
              <Text style={[com.cr]}>下一封</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/* 添加模型 - 分享区域*/}
        <View>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={{width:screenW,height:screenH,backgroundColor:'#555',opacity:0.6}}>
              <TouchableOpacity style={{flex:1,height:screenH}} onPress={() => {
  this.setState({show: !this.state.show});
}}></TouchableOpacity>
            </View>
            <View style={[com.row,com.bcke6,com.brtlr5,wds.pos]}>
              <View style={[com.aic,com.bbwc,com.ww]}>
                <TouchableOpacity style={[com.pdtb5,]}
                                  onPress={() => { this.setVisibleModal(!this.state.show);this.goPage_customerAdd()}}>
                  <Text style={{color:'#333'}}>分享</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[com.aic,com.pdtb5]} onPress={() => { this.setVisibleModal(!this.state.show)}}>
                  <Text style={{color:'#555'}}>取消</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

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
                  <Image style={[com.tcr,com.wh32,com.tcccc]} source={require('../../imgs/tpslt.png')}/>
                </TouchableOpacity>
                <View style={[com.bwc9,com.br]}>
                  <TextInput
                    style={[{width:screenW*0.6},com.h30,com.pd5,com.bwc]}
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

                <TouchableOpacity style={[com.pdtb5,]}
                                  onPress={() => { this.openLg()}}>
                  <Image style={[com.tcr,com.wh32,com.tcccc]} source={require('../../imgs/lg.png')}/>
                </TouchableOpacity>

                <Text style={[com.bgcr,com.cff,com.pd5,com.br]}>发送</Text>
              </View>
              <View style={[com.row,com.ww,com.flww,com.pdl5]}>
                {list}
              </View>

              {this.state.emoji &&<View>
                <EmojiPanel onPick={this.handlePick}/>
              </View>}

            </View>
          </Modal>
        </View>
        <View>


        </View>


      </View>


    );

  }

  handlePick(emoji) {
    const { inputText } = this.state;

    this.setState({inputText: inputText + emoji});
  }


}

const styles = StyleSheet.create({

  navltys: {
    //flex: 1,
    width: 50,
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
    backgroundColor: '#EEEFF4',
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
