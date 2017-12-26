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
} from 'react-native';
import com from '../public/css/css-com';
export default class SendNoticeNextStep extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {

      value: false

    };
  }

  sendNotice() {
    //this.props.navigation.navigate('SendNotice')
    alert('后面的页面关联性太复杂,静待后续..')
  }

  noticePreview() {
    this.props.navigation.navigate('NoticePreview')
  }
  chooseRange(){
    this.props.navigation.navigate('ChooseRange')
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
          <Text style={styles.fSelf}>
            发公告
          </Text>
          <TouchableHighlight

            onPress={()=>this.noticePreview()}
            underlayColor="#d5d5d5"
          >
            <View style={styles.navltys}>
              <Text style={[styles.fSelf,styles.navltyszt]}>下一步</Text>
            </View>

          </TouchableHighlight>
        </View>
        {/*内容主题*/}
        <ScrollView style={[com.FLEX,com.BCKF5]}>
          <TouchableHighlight

            onPress={()=>this.chooseRange()}
            underlayColor="#d5d5d5"
          >
            <View style={[com.ROW,com.BCKFFF,com.JCSB,com.PD10,com.MGT10]}>

              <Text>发送范围</Text>
              <View style={[com.ROW,com.AIC]}>
                <Text>0 人</Text>
                <Image style={[sef.imgRiCom,com.MGL5]} source={require('../imgs/jtxr.png')}/>
              </View>
            </View>
          </TouchableHighlight>
          <View style={[com.ROW,com.BCKFFF,com.JCSB,com.PD10,com.MGT10,com.AIC]}>
            <View style={[]}>
              <Text>必达提醒</Text>
              <Text style={[com.FS12,com.CBE]}>上升提醒强度,重要公告必达提醒</Text>
            </View>
            <Switch
              style={[styles.switchCon]}
              //动态改变value
              value={this.state.value}
              //当切换开关室回调此方法
              onValueChange={(value)=>{this.setState({value: value})}}
            />
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
    //flex: 1,
    //paddingLeft: 10,
    //paddingRight: 10,
    //paddingTop: 5,
    //paddingBottom: 5,
    //backgroundColor: '#fff',
  },


});
const sef = StyleSheet.create({
  imgRiCom: {
    width: 14,
    height: 14,
  },
});
