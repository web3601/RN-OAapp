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

  logTodyReport() {//日报表
    this.props.navigation.navigate('LogTodyReport')
  }

  logWeekReport() {//周报表
    this.props.navigation.navigate('LogWeekReport')
  }

  logMonthReport() {//月报表
    this.props.navigation.navigate('LogMonthReport')
  }

  logTemplate() {//选择报表模板
    this.props.navigation.navigate('LogTemplate')
  }

  logNewBulidTemplate() {
    alert('新建模板按钮')
    //this.props.navigation.navigate('LogNewBulidTemplate')
  }

  logSalecount() {
    alert('销量')
    //this.props.navigation.navigate('LogSalecount')
  }

  logSalecountUse() {
    alert('销量使用')
    //this.props.navigation.navigate('LogSalecountUse')
  }

  logManpower() {
    alert('人力')
    //this.props.navigation.navigate('LogManpower')
  }

  logManpowerUse() {
    alert('人力使用')
    //this.props.navigation.navigate('LogManpowerUse')
  }

  logSale() {
    alert('销售')
    //this.props.navigation.navigate('LogSale')
  }

  logSaleUse() {
    alert('销售使用')
    //this.props.navigation.navigate('LogSaleUse')
  }

  isdelfence() {
    alert('是否删除该栏位')
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


          <Text style={styles.fSelf}>日志模板</Text>
          <TouchableHighlight
            style={[]}
            onPress={()=>this.logNewBulidTemplate()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc]}>
              <Text style={[styles.fSelf,styles.navltyszt]}>下一步</Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <ScrollView style={[]}>
          {/*模板名称*/}
          <View style={[com.mixf,com.mgt5,com.mgb5,com.btwc]}>
            <Text style={[com.mgr15]}>模板名称</Text>
            <TextInput
              style={{height: 30,padding:5,width:screenW*0.6}}
              underlineColorAndroid={'transparent'}
              numberOfLines={1}
              placeholder='销售日报'
              placeholderTextColor='#777'
              secureTextEntry={false}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
          {/*模板设置*/}
          <View>
            {/*头部文字导航*/}
            <View style={[com.mix]}>
              <View style={[com.row,com.aic]}>
                <Text style={[com.cbe,com.fs10,com.mgr10]}>删除</Text>
                <Text style={[com.cbe,com.fs10]}>栏位名称</Text>
                <Image style={[com.wh16]} source={require('../../imgs/rc32.png')}/>
              </View>
              <Text style={[com.cbe,com.fs10]}>设置类型</Text>
              <Text style={[com.cbe,com.fs10]}>拖动排序</Text>

            </View>
            <View style={[com.bgcfff,com.pdl15]}>
              <View style={[com.row,com.bbwc,com.aic,com.jcsb,com.pdr15,com.pdt5,com.pdb5]}>
                <View style={[com.row,com.aic,com.w70,{width:screenW*0.46}]}>
                  <Image style={[com.wh16,com.mgr15,com.tcr]} source={require('../../imgs/yxsc.png')}/>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.3}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='新增客户数'
                    placeholderTextColor='#777'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
                <View style={[com.row,com.pdt5,com.pdb5,com.pdr5,com.jcsb,{width:screenW*0.46}]}>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.logNewBulidTemplate()}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic]}>
                      <Image style={[com.mgr5,com.wh16,com.tc49]} source={require('../../imgs/sz.png')}/>
                      <Text>数值</Text>
                      <Text style={[com.cr]}>*</Text>
                    </View>
                  </TouchableHighlight>
                  <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/sg.png')}/>
                </View>

              </View>

              <View style={[com.row,com.bbwc,com.aic,com.jcsb,com.pdr15,com.pdt5,com.pdb5]}>
                <View style={[com.row,com.aic,com.w70,{width:screenW*0.46}]}>
                  <Image style={[com.wh16,com.mgr15,com.tcr]} source={require('../../imgs/yxsc.png')}/>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.3}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='拜访客户数'
                    placeholderTextColor='#777'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
                <View style={[com.row,com.pdt5,com.pdb5,com.pdr5,com.jcsb,{width:screenW*0.46}]}>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.logNewBulidTemplate()}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic]}>
                      <Image style={[com.mgr5,com.wh16,com.tc49]} source={require('../../imgs/sz.png')}/>
                      <Text>数值</Text>
                    </View>
                  </TouchableHighlight>
                  <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/sg.png')}/>
                </View>

              </View>

              <View style={[com.bbwc,com.pdb5]}>
                <View style={[com.row,com.aic,com.jcsb,com.pdr15,com.pdt5,com.pdb5]}>
                  <View style={[com.row,com.aic,com.w70,{width:screenW*0.46}]}>
                    <Image style={[com.wh16,com.mgr15,com.tcr]} source={require('../../imgs/yxsc.png')}/>
                    <TextInput
                      style={{height: 30,padding:5,width:screenW*0.3}}
                      underlineColorAndroid={'transparent'}
                      numberOfLines={1}
                      placeholder='成单明细'
                      placeholderTextColor='#777'
                      secureTextEntry={false}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                    />
                  </View>
                  <View style={[com.row,com.pdt5,com.pdb5,com.pdr5,com.jcsb,{width:screenW*0.46}]}>
                    <TouchableHighlight
                      style={[]}
                      onPress={()=>this.logNewBulidTemplate()}
                      underlayColor="#f5f5f5"
                    >
                      <View style={[com.row,com.aic]}>
                        <Image style={[com.mgr5,com.wh16,com.tc49]} source={require('../../imgs/sz.png')}/>
                        <Text>组</Text>
                      </View>
                    </TouchableHighlight>
                    <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/sg.png')}/>
                  </View>

                </View>
                <View style={[com.pdl40]}>
                  <View style={[com.row,com.pdtb5]}>
                    <View style={[{width:screenW*0.4}]}>
                      <Text style={[com.fs12,com.cbe]}>成单客户</Text>
                    </View>
                    <View style={[com.row]}>
                      <Text style={[com.fs12,com.cbe]}>产品</Text>
                      <Text style={[com.cr]}>*</Text>
                    </View>
                  </View>
                  <View style={[com.row,com.pdtb5]}>
                    <View style={[{width:screenW*0.4}]}>
                      <Text style={[com.fs12,com.cbe]}>成单金额</Text>
                    </View>
                    <View style={[com.row]}>
                      <Text style={[com.fs12,com.cbe]}>数值</Text>
                      <Text style={[com.cr]}>*</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[com.row,com.bbwc,com.aic,com.jcsb,com.pdr15,com.pdt5,com.pdb5]}>
                <View style={[com.row,com.aic,com.w70,{width:screenW*0.46}]}>
                  <Image style={[com.wh16,com.mgr15,com.tcr]} source={require('../../imgs/yxsc.png')}/>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.3}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='明日计划'
                    placeholderTextColor='#777'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
                <View style={[com.row,com.pdt5,com.pdr5,com.pdb5,com.jcsb,{width:screenW*0.46}]}>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.logNewBulidTemplate()}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic]}>
                      <Image style={[com.mgr5,com.wh16,com.tc49]} source={require('../../imgs/sz.png')}/>
                      <Text>文本</Text>
                    </View>
                  </TouchableHighlight>
                  <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/sg.png')}/>
                </View>

              </View>

            </View>

          </View>
        </ScrollView>
        {/*底部固定栏*/}
        <View style={[com.mixa]}>
          <TouchableHighlight
            style={[]}
            onPress={()=>this.logNewBulidTemplate()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc,com.aic]}>
              <Image style={[com.wh26,com.tcr]} source={require('../../imgs/tjlw.png')}/>
              <Text style={[com.cr]}>添加栏位</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[]}
            onPress={()=>this.logNewBulidTemplate()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc,com.aic]}>
              <Image style={[com.wh26,com.tcr]} source={require('../../imgs/tjz.png')}/>
              <Text style={[com.cr]}>添加组</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[]}
            onPress={()=>this.logNewBulidTemplate()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc,com.aic]}>
              <Image style={[com.wh26,com.tcr]} source={require('../../imgs/yl.png')}/>
              <Text style={[com.cr]}>预览</Text>
            </View>
          </TouchableHighlight>

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
