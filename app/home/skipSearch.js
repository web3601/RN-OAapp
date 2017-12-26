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
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      value: false,
      text: '',
    };
  }

  render() {
    return (
      <View style={[com.flex]}>
        {/*导航栏*/}
        {/*搜索*/}
        <View style={[com.bckfff,com.row,com.aic,com.pdt5l10,com.bbwe9]}>
          <View style={[com.ROW,com.AIC,com.bcke6,com.PD5,com.BR,com.mgr10]}>
            <Image
              style={[com.wh16,]} source={require('../imgs/search.png')}/>
            <TextInput
              style={[com.FS12,com.PDB0,com.PDT0,{height: 19,width:screenW*0.75,}]}
              underlineColorAndroid={'transparent'}
              placeholder='搜索员工、群聊'
              placeholderTextColor='#bebebe'
              secureTextEntry={false}
              onChangeText={(ss) => this.setState({ss})} value={this.state.ss}
            />
          </View>
          <TouchableHighlight
            onPress={()=>this.back()}
            underlayColor="#fff"
          >
            <Text style={[com.cbe]}>取消</Text>
          </TouchableHighlight>
        </View>
        {/*内容主题*/}
        <ScrollView style={[com.bgcf5]}>

          {/*搜索更多内容*/}
          <View style={[com.aic,com.jcc,com.hh9]}>
            <View style={[com.row,com.mgb15]}>
              <Text style={[com.cbe,com.ft5]}>______</Text>
              <Text style={[com.cbe,com.mglr10]}>搜索更多内容</Text>
              <Text style={[com.cbe,com.ft5]}>______</Text>
            </View>

            <View style={[com.row,com.jcsa,com.ww5]}>
              <View style={[com.aic]}>
                <Image style={[com.wh32,com.tcccc]} source={require('../imgs/yg.png')}/>
                <Text>员工</Text>
              </View>

              <View style={[com.aic]}>
                <Image style={[com.wh32,com.tcccc]} source={require('../imgs/ql.png')}/>
                <Text>群聊</Text>
              </View>

            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}


