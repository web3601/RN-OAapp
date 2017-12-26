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
import ImagePicker from 'react-native-image-crop-picker';
export default class Log extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      imgArr: [],
    };
  }

  submit() {
    //this.props.navigation.navigate('LogTody')
    alert('这是提交按钮')
  }

  yysubmit() {
    //this.props.navigation.navigate('LogTody')
    alert('这是语音按钮')
  }
  delImg(){
    alert('这是删除图片的按钮')
  }
  openAffix(){
    //alert('这是打开附件')
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      maxFiles: 9,
      cropping: true
    }).then(image => {
      console.log(image.path)
      this.state.imgArr.push(image.path);
      this.setState({//放到这里只是为了渲染页面

      })
    });
  }

  render() {
    let imgArr = this.state.imgArr;
    var list = [];
    for (var i = 0; i < imgArr.length; i++) {
      list.push(
        <View style={[com.MGR5,com.pos,com.row]} key={i}>
          <Image source={{uri: imgArr[i]}} style={[com.mgr1,com.mgb10,com.wh48,]}/>
          <TouchableHighlight
            style={[com.posr,{right:-8,top:-5}]}
            onPress={()=>this.delImg()}
            underlayColor="#f5f5f5"
          >
            <Image style={[com.MGR5]}
                   source={require('../../imgs/del16.png')}/>
          </TouchableHighlight>
        </View>
      )
    }
    return (


      <View style={[styles.ancestorCon,{backgroundColor:'#f8f8f8'}]}>

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


          <Text style={styles.fSelf}>日报</Text>
          <TouchableHighlight
            style={styles.navltys}
            onPress={()=>this.submit()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc,styles.navltys]}>
              <Text style={[styles.fSelf,styles.navltyszt]}>提交</Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <ScrollView style={[]}>
          <View style={[com.row,com.jcsb,com.bckf5,com.pdt5l15,com.bbwc]}>
            <Text style={[com.cbe]}>日报</Text>
            <Text style={[com.cbe]}>已存草稿箱:10:48</Text>
          </View>
          <View style={[com.bckfff]}>
            <View style={[com.pdt5l15,com.row,com.aic]}>
              <Text style={[com.w90]}>今日完成工作</Text>
              <TextInput
                style={{height: 30,padding:5,width:screenW*0.6}}
                underlineColorAndroid={'transparent'}
                numberOfLines={1}
                placeholder='请输入文本(必填)'
                placeholderTextColor='#bebebe'
                secureTextEntry={false}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
            <View style={[com.pdt5l15,com.row,com.aic]}>
              <Text style={[com.w90]}>未完成工作</Text>
              <TextInput
                style={{height: 30,padding:5,width:screenW*0.6}}
                underlineColorAndroid={'transparent'}
                numberOfLines={1}
                placeholder='请输入文本'
                placeholderTextColor='#bebebe'
                secureTextEntry={false}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
            <View style={[com.pdt5l15,com.row,com.aic]}>
              <Text style={[com.w90]}>需协调工作</Text>
              <TextInput
                style={{height: 30,padding:5,width:screenW*0.6}}
                underlineColorAndroid={'transparent'}
                numberOfLines={1}
                placeholder='请输入文本'
                placeholderTextColor='#bebebe'
                secureTextEntry={false}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
          </View>
          <View style={[com.bckfff,com.pdt5,com.pdl15,com.pdr15]}>
            <Text>备注</Text>
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

            <View style={[com.row,com.jcfe,com.bbwc,com.pdb2]}>
              <TouchableHighlight
                style={[]}
                onPress={()=>this.yysubmit()}
                underlayColor="#f5f5f5"
              >
                <Image style={[com.wh16]} source={require('../../imgs/iconyy.png')}/>
              </TouchableHighlight>
            </View>
          </View>
          <View style={[com.pdt5l15,com.bckfff]}>
            <TouchableHighlight
              onPress={()=>this.openAffix()}
              underlayColor="#f5f5f5"
            >
              <View style={[com.row,com.jcsb,com.pdt10,com.pdb10]}>
                <Text>照片</Text>
                <Image style={[com.wh16]} source={require('../../imgs/zxj32.png')}/>
              </View>
            </TouchableHighlight>
            <View style={[com.bgcff,com.row,com.pdt10l15,com.flww,{}]}>
            {list}

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
    borderBottomColor: '#DDDEDE',
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
