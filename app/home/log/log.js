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
export default class Log extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    this.state = {

      isModalVisible: false,
      show: false
    };
  }

  setVisibleModal(visible) {
    this.setState({show: visible});
  }


  newBulid() {
    this.props.navigation.navigate('AddRss')

  }

  save() {
    alert('save');
  }

  logTody() {
    this.props.navigation.navigate('LogTody')
  }

  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({isModalVisible: true})

  logTodyReport(){//日报表
    this.props.navigation.navigate('LogTodyReport')
    //this.props.navigation.navigate('SkipSearch')
  }
  logWeekReport(){//周报表
    this.props.navigation.navigate('LogWeekReport')
  }
  logMonthReport(){//月报表
    this.props.navigation.navigate('LogMonthReport')
  }
  logTemplate(){//选择报表模板
    this.props.navigation.navigate('LogTemplate')
  }
  logDetail(){
    this.props.navigation.navigate('LogDetail')
  }
  render() {
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


          <Text style={styles.fSelf}>工作日志</Text>
          <TouchableHighlight
            style={styles.navltys}
            onPress={()=>this.logTody()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc,styles.navltys]}>
              <Text style={[styles.fSelf,styles.navltyszt]}>部门</Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <TouchableOpacity style={[com.pos]} onPress={() => { this.setState({isModalVisible: !this.state.isModalVisible})}}>
          <View style={[com.row,com.jcsb,com.aic,com.pdt10l15,com.bckfff,com.bbwc]}>
            <Text>全部</Text>
            <Image style={[com.wh16]} source={require('../../imgs/jtxx.png')}/>
          </View>
        </TouchableOpacity>
        {/*页面级-下拉框*/}
        <View>
          <Modal
            backdropOpacity={0}
            animationIn={'slideInDown'}
            animationOut={'slideOutUp'}
            isVisible={this.state.isModalVisible}
          >
              <TouchableWithoutFeedback  onPress={() => this.setState({isModalVisible: !this.state.isModalVisible})}>
                <View style={{flex:1}}>
                  <View style={[com.posr,com.h200,{top:75,left:0,width:screenW,height:screenH,backgroundColor:'#000',opacity:0.6}]}></View>
                  <View style={[styles.model_up,com.posr,{top:0}]}>
                    <View style={[com.bckfff,com.mgt75]}>
                      {/*页面级-下拉框内容*/}
                      <View style={[com.pdt5,com.pdb5,com.row,]}>
                        <View style={[{width:screenW}]}>
                          <TouchableHighlight
                            style={[]}
                            onPress={() => {this.setState({isModalVisible: !this.state.isModalVisible});}}
                            underlayColor="#f0f0f0"
                          >
                            <View style={[com.aic,com.row,com.bbwc,com.pdb5,com.mgl15]}>
                              <Image style={[com.wh16,com.mgr5]} source={require('../../imgs/cp32.png')}/>
                              <Text style={[com.cr]}>全部</Text>
                            </View>
                          </TouchableHighlight>
                          <TouchableHighlight
                            style={[]}
                            onPress={()=>{this.setState({isModalVisible: !this.state.isModalVisible});alert(1)}}
                            underlayColor="#f0f0f0"
                          >
                            <View style={[com.row,com.aic,com.bbwc,com.pdt5,com.pdb5,com.mgl30,{}]}>
                              <Image style={[com.tcccc,com.wh16,com.mgr5]} source={require('../../imgs/iconfj.png')}/>
                              <Text style={[]}>我发出的</Text>
                            </View>
                          </TouchableHighlight>
                          <TouchableHighlight
                            style={[]}
                            onPress={()=>alert(1)}
                            underlayColor="#f0f0f0"
                          >
                            <View style={[com.row,com.aic,com.bbwc,com.pdt5,com.pdb5,com.mgl30,]}>
                              <Image style={[com.tcccc,com.wh16,com.mgr5]} source={require('../../imgs/iconsj.png')}/>
                              <Text style={[]}>我收到的</Text>
                            </View>
                          </TouchableHighlight>

                        </View>
                      </View>

                    </View>
                  </View>
                </View>

              </TouchableWithoutFeedback>

          </Modal>
        </View>
        <ScrollView style={[com.pdl15,com.pdr15]}>
          {/*搜索员工*/}
          <View style={[]}>
            <TouchableHighlight
              style={[]}
              onPress={()=>alert(1)}
              underlayColor="#fff"
            >
              <View style={[com.ROW,com.jcc,com.AIC,com.BCKFFF,com.PD5,com.mgt5,com.BR]}>
                <Image
                  style={[com.wh16,com.mgr5]} source={require('../../imgs/search.png')}/>
                <Text>搜索员工</Text>
              </View>
            </TouchableHighlight>
          </View>
          {/*个人日志*/}
          <TouchableHighlight
            style={[com.mgt5]}
            onPress={()=>this.logDetail()}
            underlayColor="#fff"
          >
            <View style={[com.br10,com.bckfff,com.bwc,com.pd10,]}>
              <View style={[com.row,com.jcsb,com.bbwc,com.pdb10,com.aic]}>
                <View style={[com.row,]}>
                  <View style={[com.br200,com.bwcd]}>
                    <Image style={[com.wh32,com.br200]} source={require('../../imgs/tx/txb1.png')}/>
                  </View>


                  <View style={[com.mgl10]}>
                    <Text>cookies</Text>
                    <Text style={[com.fs10,com.cbe]}>06月16日 14:08</Text>
                  </View>
                </View>
                <View style={[com.row]}>
                  <Text style={[com.cbe,com.mgr20]}>0 评论</Text>
                  <Text>日报</Text>
                </View>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>今日完成工作</Text>
                <Text>页面</Text>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>未完成工作</Text>
                <Text>功能</Text>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>需协调工作</Text>
                <Text>测试</Text>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>备注</Text>
                <Text>测试</Text>
              </View>


              <View style={[com.jcc,com.pdt10,com.aic]}>
                <Text style={[com.cr,com.fs12]}>查看更多</Text>
              </View>

            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={[com.mgt5]}
            onPress={()=>alert(1)}
            underlayColor="#fff"
          >
            <View style={[com.br10,com.bckfff,com.bwc,com.pd10]}>
              <View style={[com.row,com.jcsb,com.bbwc,com.pdb10,com.aic]}>
                <View style={[com.row,]}>
                  <View style={[com.br200,com.bwcd]}>
                    <Image style={[com.wh32,com.br200]} source={require('../../imgs/tx/txb1.png')}/>
                  </View>

                  <View style={[com.mgl10]}>
                    <Text>cookies</Text>
                    <Text style={[com.fs10,com.cbe]}>06月16日 14:08</Text>
                  </View>
                </View>
                <View style={[com.row]}>
                  <Text style={[com.cbe,com.mgr20]}>0 评论</Text>
                  <Text>周报</Text>
                </View>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>今日完成工作</Text>
                <Text>页面</Text>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>未完成工作</Text>
                <Text>功能</Text>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>需协调工作</Text>
                <Text>测试</Text>
              </View>

              <View style={[com.bbwc,com.pd5]}>
                <Text style={[com.fs12,com.cbe,com.mgb5]}>备注</Text>
                <Text>测试</Text>
              </View>

              <View style={[com.jcc,com.pdt10,com.aic]}>
                <Text style={[com.cr,com.fs12]}>查看更多</Text>
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>

        {/*底部通栏*/}
        <View>
          <TouchableOpacity style={styles.icon_touch2} onPress={() => {{this.setState({show: !this.state.show})}}}>
            <View style={[com.row,com.pdt15,com.bckfff,com.btwc,com.pdb15,com.aic,com.jcc]}>
              <Image style={[com.wh16,com.mgr5]} source={require('../../imgs/add.png')}/>
              <Text style={[com.cr]}>发起日志</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 添加模型 */}
        <View>
          <Modal

            animationType={"fade"}
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={{width:screenW,height:screenH*0.9,backgroundColor:'#555',opacity:0.6}}>
              <TouchableOpacity style={{flex:1,height:screenH}} onPress={() => {
  this.setVisibleModal(!this.state.show)
}}></TouchableOpacity>
            </View>
            <View style={[wds.addCustomer,{height:230},com.bckfff,com.pdt10]}>
              <View style={[wds.addCustomer_card,com.pdt5,com.pdb5,com.aic,com.jcc]}>
                <View style={[com.row,com.jcsb,com.aic,{width:screenW*0.8},com.pdb10]}>
                  <TouchableOpacity style={[wds.customerCard_content,com.pdt5,com.pdb5]}
                                    onPress={() => { this.setVisibleModal(!this.state.show);this.logTodyReport()}}>
                    <View style={[com.jcc,com.aic]}>
                      <Image style={[com.wh32,com.mgr5,com.mgb5]} source={require('../../imgs/iconrb.png')}/>
                      <Text>日报</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[wds.customerCard_content,com.pdt5,com.pdb5]}
                                    onPress={() => { this.setVisibleModal(!this.state.show);this.logWeekReport()}}>
                    <View style={[com.jcc,com.aic]}>
                      <Image style={[com.wh32,com.mgr5,com.mgb5]} source={require('../../imgs/iconzb.png')}/>
                      <Text>周报</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[wds.customerCard_content,com.pdt5,com.pdb5]}
                                    onPress={() => { this.setVisibleModal(!this.state.show);this.logMonthReport()}}>
                    <View style={[com.jcc,com.aic]}>
                      <Image style={[com.wh32,com.mgr5,com.mgb5]} source={require('../../imgs/iconyb.png')}/>
                      <Text>月报</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[wds.customerCard_content,com.pdt5,com.pdb5]}
                                    onPress={() => { this.setVisibleModal(!this.state.show);this.logTemplate()}}>
                    <View style={[com.jcc,com.aic]}>
                      <Image style={[com.wh32,com.mgr5,com.mgb5]} source={require('../../imgs/icontjmb.png')}/>
                      <Text>添加模板</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={[wds.customerCard_content,com.pdt5,com.pdb5,wds.customerCard_content2]}
                                  onPress={() => { this.setVisibleModal(!this.state.show)}}>
                  <Text style={{color:'#555'}}>取消</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>


    )
      ;
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
