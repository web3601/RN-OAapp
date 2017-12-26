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
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';
export default class Log extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      array: [],
      id: 1,
      isModalVisible: false,
      show: false,
      modalVisible: false,
      dobText: '',
      dobDate: null,
      journeyText: '',
      journeyDate: null
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

  logNewBulidTemplate() {
    alert('新建模板按钮')
    //this.props.navigation.navigate('LogNewBulidTemplate')
  }

  yysubmit() {
    alert('这是语音转换按钮')
  }

  /**
   * DOB textbox click listener
   */
  onDOBPress = () => {
    let dobDate = this.state.dobDate;

    if (!dobDate || dobDate == null) {
      dobDate = new Date();
      this.setState({
        dobDate: dobDate
      });
    }

    //To open the dialog
    this.refs.dobDialog.open({
      date: dobDate,
      maxDate: new Date() //To restirct future date
    });

  }

  /**
   * Call back for dob date picked event
   *
   */
  onDOBDatePicked = (date) => {
    this.setState({
      dobDate: date,
      dobText: moment(date).format('DD-MMM-YYYY')
    });
  }


  /**
   * Journey date textbox click listener
   */
  onJourneyDatePress = () => {
    let journeyDate = this.state.journeyDate;

    if (!journeyDate || journeyDate == null) {
      journeyDate = new Date();
      this.setState({
        journeyDate: journeyDate
      });
    }

    //To open the dialog
    this.refs.journeyDialog.open({
      date: journeyDate,
      minDate: new Date() //To restirct past date
    });

  }

  /**
   * Call back for journey date picked event
   *
   */
  onJourneyDatePicked = (date) => {
    this.setState({
      journeyDate: date,
      journeyText: moment(date).format('YYYY-MM-DD')
    });
  }

  goonDel(id) {
    //alert(id)
    var arr = this.state.arr;
    var op = [];
    //console.log('id+ ' + id)
    //console.log(arr)
    for (var i in arr) {
      //console.log(i)
      if (arr[i].id === id) {
        op.push(
          {id: arr[i].id,visible: 'none'}
        )
      }else{
        op.push(
          {id: arr[i].id,visible: arr[i].visible}
        )
      }
    }
    this.setState({
      arr: op
    })
  }

  goonAdd() {
    //alert('这是继续添加按钮')
    this.state.arr.push(
      {id:this.state.id,visible:null}
    );
    this.setState({//放到这里只是为了渲染页面
      id: this.state.id + 1
    })
  }


  render() {
    let arr = this.state.arr;
    var list = [];
    for (var i in arr) {

      list.push(
        <View key={i} style={arr[i].visible?{display: arr[i].visible}:null}>
          {/*title*/}
          <View style={[com.row,com.aic,com.bbwc,com.jcsb,com.pdr10,com.bckf8,com.pdtb5]}>
            <Text style={[com.cbe,com.fs12]}>产品项({i})</Text>
            <TouchableHighlight
              style={[]}
              onPress={this.goonDel.bind(this,arr[i].id)}
              underlayColor="#f5f5f5"
            >
              <Image style={[com.wh14,com.tcccc]} source={require('../../imgs/sc32.png')}/>
            </TouchableHighlight>

          </View>

          {/*内容区域*/}
          <View>
            {/*产品*/}
            <TouchableHighlight
              style={[]}
              onPress={()=>alert('日期插件')}
              underlayColor="#f5f5f5"
            >
              <View style={[com.row,com.pdtb5,com.pdr10,com.jcsb,com.aic,com.bbwc]}>
                <View style={[com.row]}>
                  <Text style={[com.mgr15,com.w55]}>产品</Text>
                  <Text style={[com.cbe]}>请选择(必填)</Text>
                </View>
                <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/rjt.png')}/>
              </View>
            </TouchableHighlight>

            {/*销售额*/}
            <View style={[com.row,com.pdtb5,com.aic,com.bbwc]}>
              <Text style={[com.mgr10,com.w55]}>销售额</Text>
              <TextInput
                style={{height: 30,padding:5,width:screenW*0.6}}
                underlineColorAndroid={'transparent'}
                numberOfLines={1}
                placeholder='请填写数字'
                placeholderTextColor='#bebebe'
                secureTextEntry={false}
                onChangeText={(t) => this.setState({[i]:t})}
                value={this.state.text}
              />
            </View>
          </View>
        </View>
      )
    }
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


          <Text style={[styles.fSelf,com.fl30]}>模板样式预览</Text>
          <TouchableHighlight
            style={[]}
            onPress={()=>this.logNewBulidTemplate()}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc]}>
              <Text style={[styles.fSelf,styles.navltyszt]}></Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <ScrollView style={[com.pdt5,com.bckf5]}>
          {/*模板名称*/}
          <View style={[com.pdl15,com.bckfff,com.btwc]}>
            <View>
              {/*销售日期*/}
              <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)}>
                <View style={[com.row,com.jcsb,com.pdtb5,com.pdr9,com.bbwc]}>
                  <View style={[com.row]}>
                    <Text style={[com.w90]}>销售日期</Text>
                    <Text style={[com.w100]}>{this.state.journeyText}</Text>
                  </View>
                  <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/cal.png')}/>
                </View>
              </TouchableOpacity>

              {/*日销售额*/}
              <View style={[com.row,com.pdtb5,com.aic,com.bbwc]}>
                <Text style={[com.mgr10]}>日销售额</Text>
                <TextInput
                  style={{height: 30,padding:5,width:screenW*0.6}}
                  underlineColorAndroid={'transparent'}
                  numberOfLines={1}
                  placeholder='请填写数字'
                  placeholderTextColor='#bebebe'
                  secureTextEntry={false}
                  onChangeText={(b) => this.setState({b})}
                  value={this.state.text}
                />
              </View>

              {/*产品项1*/}
              <View>
                {/*title*/}
                <View style={[com.row,com.aic,com.bbwc,com.jcsb,com.pdr10,com.bckf8,com.pdtb5]}>
                  <Text style={[com.cbe,com.fs12]}>产品项(1)</Text>
                  <Image style={[com.wh14,com.tcccc]} source={require('../../imgs/sc32.png')}/>
                </View>

                {/*内容区域*/}
                <View>
                  {/*产品*/}
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert('日期插件')}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.pdtb5,com.pdr10,com.jcsb,com.aic,com.bbwc]}>
                      <View style={[com.row]}>
                        <Text style={[com.mgr15,com.w55]}>产品</Text>
                        <Text style={[com.cbe]}>请选择(必填)</Text>
                      </View>
                      <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/rjt.png')}/>
                    </View>
                  </TouchableHighlight>

                  {/*销售额*/}
                  <View style={[com.row,com.pdtb5,com.aic,com.bbwc]}>
                    <Text style={[com.mgr10,com.w55]}>销售额</Text>
                    <TextInput
                      style={{height: 30,padding:5,width:screenW*0.6}}
                      underlineColorAndroid={'transparent'}
                      numberOfLines={1}
                      placeholder='请填写数字'
                      placeholderTextColor='#bebebe'
                      secureTextEntry={false}
                      onChangeText={(a) => this.setState({a})}
                      value={this.state.text}
                    />
                  </View>
                </View>
              </View>


              {list}

              {/*区域底部添加栏位*/}
              <TouchableHighlight
                style={[]}
                onPress={()=>this.goonAdd()}
                underlayColor="#f5f5f5"
              >
                <View style={[com.row,com.aic,com.bckfff,com.jcc,com.pdtb10,com.bbwc]}>
                  <Image style={[com.wh16,com.tcr,com.mgr7]} source={require('../../imgs/addr.png')}/>
                  <Text>继续添加</Text>
                </View>
              </TouchableHighlight>
              <View style={[com.bckfff,com.pdt5,]}>

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
                  onChangeText={(c) => this.setState({c})}
                  value={this.state.text}
                />

                <View style={[com.row,com.jcfe,com.bbwc,com.pdb2,com.pdr5]}>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>this.yysubmit()}
                    underlayColor="#f5f5f5"
                  >
                    <Image style={[com.wh16]} source={require('../../imgs/iconyy.png')}/>
                  </TouchableHighlight>
                </View>
              </View>

            </View>


          </View>


        </ScrollView>

        <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)}/>
        <DatePickerDialog ref="journeyDialog" onDatePicked={this.onJourneyDatePicked.bind(this)}/>
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
