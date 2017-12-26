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
} from 'react-native';
import com from '../public/css/css-com';
export default class Notice extends Component {
  back() {
    this.props.navigation.goBack(null);
  }


  sendNotice() {
    this.props.navigation.navigate('SendNotice')
    //alert('后面的页面关联性太复杂,静待后续..')
  }
  noticeDetail(){
    this.props.navigation.navigate('NoticeDetail')
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
          <Text style={styles.fSelf}>公告</Text>
          <TouchableHighlight

            onPress={()=>this.sendNotice()}
            underlayColor="#d5d5d5"
          >
            <View style={styles.navltys}>
              <Text style={[styles.fSelf,styles.navltyszt]}>发公告</Text>
            </View>

          </TouchableHighlight>
        </View>
        {/*内容主题*/}
        <ScrollView style={styles.childContent}>
          <View style={[styles.common]}>
            <TouchableHighlight

              onPress={()=>this.noticeDetail()}
              underlayColor="#d5d5d5"
            >

              <View style={[com.ROW,]}>
                <View style={[sef.rowCom,com.AIC,com.JCC,com.MGR10]}>
                  <Image style={[sef.imgCom]} source={require('../imgs/notice/gg48.png')}/>
                </View>
                <View style={[com.AISB]}>
                  <Text>123</Text>
                  <Text style={[sef.txtCom,sef.txtSelf]}>2017年06月13日 16:28</Text>
                  <Text style={[sef.txtCom,sef.txtSelfTwo]}>全部已读</Text>
                </View>
              </View>
            </TouchableHighlight>

          </View>
        </ScrollView>
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
  rowCom: {
    backgroundColor: '#DEDEDE',
    width: 60,
    height: 60
  },
  imgCom: {
    width: 32,
    height: 32,
  },
  txtCom: {
    fontSize: 12,
  },
  txtSelf: {
    color: '#dedede'
  },
  txtSelfTwo: {
    color: '#aeaeae'
  },
});
