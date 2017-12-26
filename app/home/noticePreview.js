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

  previewNotice() {
    this.props.navigation.navigate('PreviewNotice')
  }

  chooseRange() {
    this.props.navigation.navigate('ChooseRange')
  }

  issue() {
    alert('这是发布的按钮')

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
            预览公告
          </Text>
          <TouchableHighlight

            onPress={()=>this.issue()}
            underlayColor="#d5d5d5"
          >
            <View style={styles.navltys}>
              <Text style={[styles.fSelf,styles.navltyszt]}>发布</Text>
            </View>

          </TouchableHighlight>
        </View>
        {/*内容主题*/}
        <ScrollView style={[com.FLEX,com.BCKFFF,com.pdt5l10]}>
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
  imgSelfOne: {
    width: 100,
    height: 100,
  },
  imgSelfTwo: {
    width: 30,
    height: 30,
  },
});
