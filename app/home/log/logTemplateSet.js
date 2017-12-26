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
import CheckBox from 'react-native-check-box'
export default class Log extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    this.state = {

      isModalVisible: false,
      show: false,
      modalVisible: false
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

  logTemplateSet() {
    this.props.navigation.navigate('LogTemplateSet')
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

  logTemplateAddGroup() {
    this.props.navigation.navigate('LogTemplateAddGroup')
  }

  logTemplateStylePreview() {
    this.props.navigation.navigate('LogTemplateStylePreview')
  }
  chooseRange(){
    this.props.navigation.navigate('ChooseRange')
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


          <Text style={styles.fSelf}>
            设置日志模板
          </Text>
          <TouchableHighlight
            style={[]}
            onPress={()=>alert('保存?')}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc]}>
              <Text style={[styles.fSelf,styles.navltyszt]}>保存</Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <ScrollView style={[com.bgce6]}>
          {/*模板名称*/}
          <View style={[com.mixf,com.mgt5,com.mgb5]}>
            <Text style={[com.mgr15]}>模板名称</Text>
            <TextInput
              style={{height: 30,padding:5,width:screenW*0.6}}
              underlineColorAndroid={'transparent'}
              numberOfLines={1}
              placeholder='销量日报'
              placeholderTextColor='#777'
              secureTextEntry={false}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>

          {/*模板图标*/}
          <TouchableHighlight
            onPress={()=>alert('这是跳转选择图标的按钮')}
            underlayColor="#d5d5d5"
          >
            <View style={[com.mixf,com.aic,com.jcsb]}>
              <Text>模板图标</Text>
              <View style={[com.row,com.aic]}>
                <Image style={[com.wh24,com.tc67]} source={require('../../imgs/iconrbnres.png')}/>
                <Image style={[com.wh16,com.mgl10]} source={require('../../imgs/jtxr.png')}/>
              </View>
            </View>
          </TouchableHighlight>

          {/*描述*/}
          <View style={[com.mixf,com.mgt5,com.mgt5]}>
            <Text style={[com.mgr15]}>模板名称</Text>
            <TextInput
              style={{height: 30,padding:5,width:screenW*0.6}}
              underlineColorAndroid={'transparent'}
              numberOfLines={1}
              placeholder='公司每日的产品销量日报'
              placeholderTextColor='#777'
              secureTextEntry={false}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>

          {/*模板的简介*/}
          <View style={[com.mixbbpe6,]}>
            <Text style={[com.fs12,com.cbe]}>模板的简介</Text>
          </View>

          {/*适用范围*/}
          <TouchableHighlight
            onPress={()=>this.chooseRange()}
            underlayColor="#d5d5d5"
          >
            <View style={[com.mixf_nob,com.bbwc,com.jcsb]}>

              <View style={[com.row,com.aic]}>
                <Text style={[com.mgr20]}>使用范围</Text>
                <Text>全公司</Text>
              </View>

              <Image style={[com.wh16,com.mgl10]} source={require('../../imgs/jtxr.png')}/>
            </View>
          </TouchableHighlight>

          <View style={[com.mixbbpe6_nob]}>
            <Text style={[com.fs12,com.cbe]}>使用该部门的直属部门和子部门.可见此模板</Text>
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
const sef = StyleSheet.create({
  model: {
    width: screenW,
    height: screenH,
    //position: 'absolute',
    //right: 6,
    //top: 55,
    backgroundColor: '#000',
    opacity: 0.6,
    //borderRadius: 6
  },
  model_up: {
    width: screenW * 0.93,
    height: screenH * 0.9,
    backgroundColor: '#fff',
    position: 'absolute',
    justifyContent: 'center',
    left: screenW * 0.04,
    top: screenH * 0.02,

  },
});
