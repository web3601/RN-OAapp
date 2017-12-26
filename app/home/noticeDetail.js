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
//弹出窗口必用-s
  Dimensions,
  Modal,
  TouchableOpacity,
//弹出窗口必用-e
} from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import wds from '../public/css/css-window-single';
import com from '../public/css/css-com';
export default class NoticeDetail extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  //控制层

  setVisibleModal(visible) {
    this.setState({show: visible});
  }


  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      show: false,
      value: false

    };
  }

  sendNotice() {
    //this.props.navigation.navigate('SendNotice');
    alert('后面的页面关联性太复杂,静待后续..')
  }

  goPage_share() {
    this.props.navigation.navigate('Share')
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
          <Text style={styles.fSelf}>公告详情</Text>
          <TouchableOpacity style={wds.icon_touch2} onPress={() => {{this.setState({show: !this.state.show})}}}>
            <View style={styles.navltys}>
              <Image style={[styles.navltysImg]} source={require('../imgs/product/slh32.png')}/>
            </View>

          </TouchableOpacity>
        </View>
        {/*内容主题*/}
        <ScrollView style={[com.PD10,com.FLEX,com.BCKF5]}>
          {/*基本信息*/}
          <View style={[com.PDT10,com.PDB10,com.BBW,com.BCE6]}>
            <Text style={[]}>测试公告</Text>
            <Text style={[com.PDB10,com.CBE,com.FS12]}>
              <Text>cookie</Text>
              <Text>2017年06月16日 14:06</Text>
            </Text>
            <Text style={[]}>
              这是测试
            </Text>

          </View>
          {/*图片*/}
          <View style={[com.PDT10,com.PDB10,com.BBW,com.BCE6]}>
            <Text style={[com.MGB10]}>图片</Text>
            <View style={[com.PD5]}>
              <Image style={[sef.imgSelfOne]}
                     source={require('../imgs/notice/testself1700.png')}/>

            </View>
          </View>
          {/*附件*/}
          <View style={[com.PDT5]}>
            <View style={[com.PDB5]}>
              <Text>附件</Text>
            </View>
            <View style={[com.ROW,com.AIC]}>
              <Image style={[sef.imgSelfTwo,com.MGR5,]}
                     source={require('../imgs/project.png')}/>
              <Text style={[com.CBE]}>000xxx000xxx.jpg</Text>
            </View>
          </View>
        </ScrollView>


        {/* 添加模型 */}
        <View>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={[{width:screenW,height:screenH*0.8,backgroundColor:'#555',opacity:0.6},]}>
              <TouchableOpacity style={{flex:1,height:screenH}} onPress={() => {
  this.setVisibleModal(!this.state.show)
}}></TouchableOpacity>
            </View>
            <View style={[wds.addCustomer,com.ROW,com.JCC]}>
              <View style={wds.addCustomer_card}>
                <TouchableOpacity style={[com.PD10]}
                                  onPress={() => { this.setVisibleModal(!this.state.show);this.goPage_share()}}>
                  <Text style={{color:'#333'}}>分享</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[com.PD10,com.AIC]}
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
    flex: 1,
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
    backgroundColor: '#EEEFF4'
  },
  nav: {//头部导航
    height: 40,
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
  imgSelfOne: {
    width: 100,
    height: 100,
  },
  imgSelfTwo: {
    width: 30,
    height: 30,
  },
});
