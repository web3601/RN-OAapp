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
    //alert('新建模板按钮')
    this.props.navigation.navigate('LogNewBulidTemplate')
  }

  logSalecount() {
    //alert('销量')
    this.props.navigation.navigate('LogSalecount')
  }

  logSalecountUse() {
    //alert('销量使用')
    this.props.navigation.navigate('LogSalecountUse')
  }

  logManpower() {
    //alert('人力')
    this.props.navigation.navigate('LogManpower')
  }

  logManpowerUse() {
    //alert('人力使用')
    this.props.navigation.navigate('LogManpowerUse')
  }

  logSale() {
    //alert('销售')
    this.props.navigation.navigate('LogSale')
  }

  logSaleUse() {
    //alert('销售使用')
    this.props.navigation.navigate('LogSaleUse')
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


          <Text style={styles.fSelf}>选择模板</Text>
          <TouchableHighlight
            style={[]}
            onPress={()=>this.logSalecountUse()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc]}>
              <Text style={[styles.fSelf,styles.navltyszt]}>新建模板</Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <ScrollView style={[]}>
          <View style={[com.pdl15,com.pdr15,com.pdt5,com.pdb5,com.bbwd,com.bgcf5]}>
            <Text>日志模板</Text>
          </View>
          <View>
            <View>

              <TouchableHighlight
                style={[]}
                onPress={()=>this.logSalecount()}
                underlayColor="#a0a0a0"
              >
                <View style={[com.row,com.jcsb,com.bbwc,com.pdt5l15,com.aic,com.bgcfff]}>
                  <View style={[com.row,com.aic]}>
                    <Image style={[com.wh48,com.tc6,com.mgr5]} source={require('../../imgs/iconrb.png')}/>
                    <View>
                      <Text>销量日报</Text>
                      <Text style={[com.fs12,com.cbe]}>公司每日的产品销售日报</Text>
                    </View>
                  </View>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.logSalecountUse()}
                    underlayColor="#f0f0f0"
                  >
                    <Text style={[com.bwcd,com.cd,com.br,com.pdt5l10]}>使用</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={[]}
                onPress={()=>this.logManpower()}
                underlayColor="#a0a0a0"
              >
                <View style={[com.row,com.jcsb,com.bbwc,com.pdt5l15,com.aic,com.bgcfff]}>
                  <View style={[com.row,com.aic]}>
                    <Image style={[com.wh48,com.tcp,com.mgr5]} source={require('../../imgs/iconrb.png')}/>
                    <View>
                      <Text>人力日报</Text>
                      <Text style={[com.fs12,com.cbe]}>人力资源的每日工作总结</Text>
                    </View>
                  </View>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.logManpowerUse()}
                    underlayColor="#f0f0f0"
                  >
                    <Text style={[com.bwcd,com.cd,com.br,com.pdt5l10]}>使用</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={[]}
                onPress={()=>this.logSale()}
                underlayColor="#a0a0a0"
              >
                <View style={[com.row,com.jcsb,com.bbwc,com.pdt5l15,com.aic,com.bgcfff]}>
                  <View style={[com.row,com.aic]}>
                    <Image style={[com.wh48,com.tcr,com.mgr5]} source={require('../../imgs/iconrb.png')}/>
                    <View>
                      <Text>销售日报</Text>
                      <Text style={[com.fs12,com.cbe]}>销售代表的每日工作总结</Text>
                    </View>
                  </View>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.logSaleUse()}
                    underlayColor="#f0f0f0"
                  >
                    <Text style={[com.bwcd,com.cd,com.br,com.pdt5l10]}>使用</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>

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
