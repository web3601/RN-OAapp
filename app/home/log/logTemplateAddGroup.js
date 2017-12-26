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
  Switch,
} from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../../public/css/css-com';
import Modal from 'react-native-modal'
import wds from '../../public/css/css-window-single'
import CheckBox from 'react-native-check-box'
export default class Log extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    this.state = {
      value: false,
      isModalVisible: false,
      show: false,
      modalVisible: false
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


          <Text style={styles.fSelf}>添加组</Text>
          <TouchableHighlight
            style={[]}
            onPress={()=>alert('确定?')}
            underlayColor="#f5f5f5"
          >
            <View style={[com.jcc]}>
              <Text style={[styles.fSelf,styles.navltyszt]}>确定</Text>
            </View>
          </TouchableHighlight>

        </View>
        {/*内容主题*/}
        <ScrollView style={[]}>
          {/*组名称&&可重复添加*/}
          <View style={[com.pdl10,com.bckfff,com.bbwc]}>
            <View style={[com.row,com.aic,com.bckfff,com.pdtb5,com.bbwc,com.mgt5]}>
              <Text style={[com.mgr15,{width:screenW*0.2}]}>组名称</Text>
              <TextInput
                style={{height: 30,padding:5,width:screenW*0.6}}
                underlineColorAndroid={'transparent'}
                numberOfLines={1}
                placeholder='请填写组名称'
                placeholderTextColor='#777'
                secureTextEntry={false}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
            <View style={[com.row,com.aic,com.bckfff,com.pdtb5,com.jcsb,com.pdr15]}>
              <Text style={[com.mgr15]}>可重复添加</Text>
              <Switch
                style={[styles.switchCon]}
                //动态改变value
                value={this.state.value}
                //当切换开关室回调此方法
                onValueChange={(value)=>{this.setState({value: value})}}
              />

            </View>
          </View>
          {/*【文字信息】:开启后,此组在使用中,可重复添加,并填入数据.效果可预览查看*/}
          <View style={[com.mixf8_nob,]}>
            <Text style={[com.cb4,com.fs12]}>
              开启后,此组在使用中,可重复添加,并填入数据.效果可预览查看
            </Text>
          </View>

          {/*提示编辑区域*/}
          <View>
            {/*头部文字导航*/}
            <View style={[com.mix]}>
              <View style={[com.row,com.aic]}>
                <Text style={[com.cbe,com.fs10,com.mgr10]}>删除</Text>
                <Text style={[com.cbe,com.fs10]}>栏位名称</Text>
                <Image style={[com.wh16]} source={require('../../imgs/rc32.png')}/>
              </View>
              <Text style={[com.cbe,com.fs10]}>设置类型</Text>
              <Text style={[com.cbe,com.fs10]}>拖动排序</Text>

            </View>

            {/*区域底部添加栏位*/}
            <TouchableOpacity
              onPress={() => { this.setState({modalVisible: !this.state.modalVisible})}}
            >
              <View style={[com.row,com.aic,com.bckfff,com.jcc,com.pdtb10,com.bbwc]}>
                <Image style={[com.wh16,com.mgr10]} source={require('../../imgs/add.png')}/>
                <Text>添加栏位</Text>
              </View>
            </TouchableOpacity>


          </View>
        </ScrollView>
        {/*这是弹窗的页面*/}
        <View>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            {/*<TouchableWithoutFeedback
             onPress={()=>this.setState({modalVisible: !this.state.modalVisible})}
             >*/}
            <View style={{flex:1}}>
              <View style={sef.model}></View>
              <View style={[sef.model_up,com.pdt10,com.pdb10,com.br5]}>
                {/*
                 <View style={wds.icon_san}>
                 <Image style={wds.icon_2}
                 source={require('../imgs/customer/background_san.png')}/>

                 </View>
                 <TouchableOpacity style={wds.model_up_in}
                 onPress={() => {this.setState({modalVisible: !this.state.modalVisible});this.goPage_add_xiansuo()}}>
                 <Image style={wds.icon_}
                 source={require('../imgs/customer/add_xiansuo.png')}/>
                 <Text style={wds.text_color}> 手动新建</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={[wds.model_up_in,wds.model_up_border]}
                 onPress={() => {this.setState({modalVisible: !this.state.modalVisible});this.goPage_add_shangji()}}>
                 <Image style={wds.icon_1}
                 source={require('../imgs/customer/add_business.png')}/>
                 <Text style={wds.text_color}> 复用订单</Text>
                 </TouchableOpacity>
                 */}
                <View style={[com.pdl15,com.pdr15,com.pdb8]}>
                  <Text>请选择</Text>
                </View>
                <ScrollView>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>文本</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>数值</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>单选选项</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>多选选项</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>时间</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>照片</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>产品</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>客户</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>员工</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>定位</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                  style={[]}
                  onPress={()=>alert(1)}
                  underlayColor="#f5f5f5"
                >
                  <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                    <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                    <Text>项目</Text>
                  </View>
                </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>客户联系人</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>电话</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>邮箱</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[]}
                    onPress={()=>alert(1)}
                    underlayColor="#f5f5f5"
                  >
                    <View style={[com.row,com.aic,com.pdt15l20,com.pdl30,{zIndex:100}]}>
                      <Text style={[com.wh18,com.br200,com.bwc9,com.mgr15]}></Text>
                      <Text>计算</Text>
                    </View>
                  </TouchableHighlight>

                </ScrollView>

                <View style={[com.pdl15,com.pdr15,com.pdt10,com.row,com.btwc,com.jcfe]}>
                  <TouchableHighlight
                    style={[com.pd5,com.br5]}
                    onPress={()=>this.setState({modalVisible:!this.state.modalVisible})}
                    underlayColor="#d5d5d5"
                  >
                    <Text style={[com.c489]}>取消</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            {/*</TouchableWithoutFeedback>*/}
          </Modal>
        </View>
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
