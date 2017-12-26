/**
 * Created by Administrator on 2017/6/12.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import com from '../public/css/css-com';

export default class Share extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  share() {
    this.props.navigation.navigate('Share')
  }

  chooseRange() {
    this.props.navigation.navigate('ChooseRange')
  }

  skipSearch() {
    this.props.navigation.navigate('SkipSearch')
  }

  doubleCheck() {
    alert('doubleCheck')
  }

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      value: false,
      text: '',

    };
  }

  //onSelect(index, value) {
  //    this.setState({
  //        //text: `Selected index: ${index} , value: ${value}`
  //        text: ` ${value}`
  //    })
  //}
  render() {
    return (
      <View style={styles.ancestorCon}>
        {/*导航栏*/}
        <View style={[styles.nav,com.aic]}>
          <TouchableHighlight
            onPress={()=>this.back()}
            underlayColor="#fff"
          >
            <View style={styles.navltys}>
              <Text style={[styles.fSelf,styles.navltyszt]}>取消</Text>
            </View>

          </TouchableHighlight>
          <Text style={styles.fSelf}>分享</Text>
          <TouchableHighlight
            onPress={()=>this.doubleCheck()}
            underlayColor="#fff"
          >
            <View style={styles.navltys}>
              <Text style={[styles.fSelf,styles.navltyszt]}>多选</Text>
            </View>
          </TouchableHighlight>
        </View>
        {/*内容主题*/}
        <ScrollView style={[com.flex,com.bgcf5]}>
          {/*搜索*/}
          <TouchableHighlight
            onPress={()=>this.skipSearch()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.bwe,com.ROW,com.mgt5l15,com.AIC,com.jcc,com.BCKFFF,com.PD5,com.BR]}>
              <Image
                style={[com.wh16,com.mgr5]} source={require('../imgs/search.png')}/>
              <Text>搜索</Text>
            </View>
          </TouchableHighlight>

          {/*创建新聊天*/}
          <TouchableHighlight
            onPress={()=>this.chooseRange()}
            underlayColor="#A0A0A0"
          >
            <View style={[com.row,com.btbwe9,com.jcsb,com.pdt5l15,com.aic,com.bgcfff]}>
              <Text>创建新聊天</Text>
              <Image
                style={[com.wh16,com.tcccc]} source={require('../imgs/rjt.png')}/>
            </View>
          </TouchableHighlight>

          {/*最近聊天*/}
          <View>
            <View style={[com.pdt5l15]}>
              <Text style={[com.fs12,com.cbe]}>最近聊天</Text>
            </View>
            <View style={[com.pdt5l15,com.btbwe9,com.bgcfff,com.row,com.aic]}>
              <Image style={[com.wh32,com.tcr,com.mgr15]} source={require('../imgs/tx.png')}/>
              <View>
                <Text>全体群</Text>
                <Text style={[com.fs12,com.cbe]}>1人</Text>
              </View>
            </View>
          </View>




        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navltys: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: (Platform.OS === 'ios') ? 50 : 30,
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

});
