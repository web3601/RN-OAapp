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
} from 'react-native';
import com from '../public/css/css-com';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
export default class Attendance extends Component {
  back() {
    this.props.navigation.goBack(null);
  }


  attendanceSet() {
    this.props.navigation.navigate('AttendanceSet')
    //alert('后面的页面关联性太复杂,静待后续..')
  }


  render() {
    return (


      <View style={styles.ancestorCon}>
        {/*导航栏*/}
        <View style={[styles.nav,com.aic,com.jcsb]}>
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
          <Text style={styles.fSelf}>考勤</Text>
          <TouchableHighlight

            onPress={()=>this.attendanceSet()}
            underlayColor="#d5d5d5"
          >
            <View style={styles.navltysre}>
              <Image source={require('../imgs/navnz16.png')}/>
            </View>

          </TouchableHighlight>
        </View>
        {/*内容主题*/}
        {/*

        <ScrollView style={[com.flex,com.bckfff,com.pdt5l20,]}>
          <View style={[com.row,com.aic,com.flex,com.tecr]}>
            <Text>这是考勤区域</Text>
          </View>

        </ScrollView>*/}
        <View style={[com.aic,com.jcc,com.row,com.flex,]}>
            <Text style={[com.bcke6,com.jcc,com.aic]}>这是考勤区域</Text>
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
  navltysre: {
    flex: 1,
    flexDirection: 'row',
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
