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

  callCalendar() {
    alert('调用日历')
  }
  goonAdd(){
    alert('继续添加')
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


          <Text style={[styles.fSelf,com.fl30]}>销售日报</Text>
          <TouchableHighlight
            style={[]}
            onPress={()=>this.logNewBulidTemplate()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc]}>
              <Text style={[styles.fSelf,styles.navltyszt]}></Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <ScrollView style={[]}>
          <View style={[com.mixbbp515]}>
            <Text style={[com.fs10,com.cbe]}>销售日报</Text>
          </View>
          <View>
            <View style={[com.pdl15,com.bgcfff,com.bbwd]}>
              <View style={[com.row,com.aic,com.bbwc,com.jcsb,com.pdr8]}>
                <View style={[com.row,com.aic]}>
                  <Text style={[com.mgr30]}>新增客户数</Text>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.6}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='请选择(必填)'
                    placeholderTextColor='#bebebe'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
              </View>
              <View>
                <View style={[com.row,com.aic]}>
                  <Text style={[com.mgr30]}>拜访客户数</Text>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.6}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='请填写数字'
                    placeholderTextColor='#bebebe'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={[com.mixbbp1015]}>
              <Text style={[com.fs10,com.cbe]}>成单明细(1)</Text>
            </View>
            <View style={[com.pdl15,com.bgcfff,com.bbwd]}>
              <View style={[com.row,com.aic,com.bbwc,com.jcsb,com.pdr8]}>
                <View style={[com.row,com.aic]}>
                  <Text style={[com.mgr30]}>成单客户</Text>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.6}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='请选择(必填)'
                    placeholderTextColor='#bebebe'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
              </View>
              <View>
                <View style={[com.row,com.aic,com.bbwd]}>
                  <Text style={[com.mgr30]}>成单金额</Text>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.6}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='请填写数字(必填)'
                    placeholderTextColor='#bebebe'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
              </View>
              <View>
                <TouchableHighlight
                  style={[]}
                  onPress={()=>this.goonAdd()}
                  underlayColor="#ffffff"
                >
                  <View style={[com.row,com.aic,com.jcc,com.pdt5l15,com.bbwc]}>
                    <Image style={[com.wh16,com.mgr5,com.tcr]} source={require('../../imgs/addr.png')}/>
                    <Text>继续添加</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={[com.bckfff,com.pdt5,com.pdr15]}>
                <Text>明日计划</Text>
                <TextInput
                  style={{height: 100,padding:5,}}
                  underlineColorAndroid={'transparent'}
                  numberOfLines={10}
                  multiline={true}
                  textAlignVertical="top"
                  placeholder='请输入文本'
                  placeholderTextColor='#bebebe'
                  secureTextEntry={false}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />

                <View style={[com.row,com.jcfe,com.pdb2]}>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.yysubmit()}
                    underlayColor="#f5f5f5"
                  >
                    <Image style={[com.wh16]} source={require('../../imgs/iconyy.png')}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
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
