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

import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';
export default class Log extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    this.state = {

      isModalVisible: false,
      show: false,

      dobText: '',
      dobDate: null,
      journeyText: '',
      journeyDate: null,
    };
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

  logNewBulidTemplate() {
    alert('新建模板按钮')
    //this.props.navigation.navigate('LogNewBulidTemplate')
  }

  callCalendar() {
    alert('调用日历')
  }

  goonAdd() {
    alert('继续添加')
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


          <Text style={[styles.fSelf,com.fl30]}>销量日报</Text>
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
        <ScrollView style={[]}>
          <View style={[com.mixbbp515]}>
            <Text style={[com.fs10,com.cbe]}>销量日报</Text>
          </View>
          <View>
            <View style={[com.pdl15,com.bgcfff,com.bbwd]}>

              <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)}>
                <View style={[com.row,com.jcsb,com.pdtb5,com.pdr9,com.bbwc]}>
                  <View style={[com.row]}>
                    <Text style={[com.w90]}>销售日期</Text>
                    <Text style={[com.w100]}>{this.state.journeyText}</Text>
                  </View>
                  <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/cal.png')}/>
                </View>
              </TouchableOpacity>


              <View>
                <View style={[com.row,com.aic]}>
                  <Text style={[com.mgr30]}>日销售额</Text>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.6}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='请填写数字'
                    placeholderTextColor='#bebebe'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={[com.mixbbp1015]}>
              <Text style={[com.fs10,com.cbe]}>产品项(1)</Text>
            </View>
            <View style={[com.pdl15,com.bgcfff,com.bbwd]}>
              <View style={[com.row,com.aic,com.bbwc,com.jcsb,com.pdr8]}>
                <View style={[com.row,com.aic]}>
                  <Text style={[com.mgr30]}>销售日期</Text>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.6}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='请选择(必填)'
                    placeholderTextColor='#bebebe'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
                <TouchableHighlight
                  style={[]}
                  onPress={()=>this.callCalendar()}
                  underlayColor="#f5f5f5"
                >
                  <Image style={[com.wh16,com.tcccc]} source={require('../../imgs/jtxr.png')}/>
                </TouchableHighlight>
              </View>
              <View>
                <View style={[com.row,com.aic,com.bbwd]}>
                  <Text style={[com.mgr30]}>日销售额</Text>
                  <TextInput
                    style={{height: 30,padding:5,width:screenW*0.6}}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    placeholder='请填写数字(必填)'
                    placeholderTextColor='#bebebe'
                    secureTextEntry={false}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
              </View>
              <View>
                <TouchableHighlight
                  style={[]}
                  onPress={()=>this.goonAdd()}
                  underlayColor="#ffffff"
                >
                  <View style={[com.row,com.aic,com.jcc,com.pdt5l15,com.bbwc]}>
                    <Image style={[com.wh16,com.mgr5,com.tcr]} source={require('../../imgs/addr.png')}/>
                    <Text>继续添加</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={[com.bckfff,com.pdt5,com.pdr15]}>
                <Text>销售说明</Text>
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

                <View style={[com.row,com.jcfe,com.pdb2]}>
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
        {/*

         <View style={styles.container}>

         <Text style={styles.content}>
         Date Picker Dialog Example
         </Text>

         <View style={{flex:1, marginTop:10}}>
         <Text>DOB</Text>
         <TouchableOpacity onPress={this.onDOBPress.bind(this)}>
         <View style={styles.datePickerBox}>
         <Text style={styles.datePickerText}>{this.state.dobText}</Text>
         </View>
         </TouchableOpacity>

         <Text style={{marginTop: 20}}>Journey Date</Text>
         <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)}>
         <View style={styles.datePickerBox}>
         <Text style={styles.datePickerText}>{this.state.journeyText}</Text>
         </View>
         </TouchableOpacity>

         </View>
         */}

        {/* Place the dialog component at end of your views and assign the references, event handlers to it.*/}
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


  //container: {
  //  flex: 1,
  //  padding: 10,
  //  backgroundColor: '#FFFFFF'
  //},
  //content: {
  //  fontSize: 20,
  //  textAlign: 'center',
  //  margin: 10,
  //},
  //datePickerBox: {
  //  marginTop: 9,
  //  borderColor: '#ABABAB',
  //  borderWidth: 0.5,
  //  padding: 0,
  //  borderTopLeftRadius: 4,
  //  borderTopRightRadius: 4,
  //  borderBottomLeftRadius: 4,
  //  borderBottomRightRadius: 4,
  //  height: 38,
  //  justifyContent: 'center'
  //},
  //datePickerText: {
  //  fontSize: 14,
  //  marginLeft: 5,
  //  borderWidth: 0,
  //  color: '#121212',
  //},


});
