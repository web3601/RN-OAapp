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

  TextInput,
} from 'react-native';
import com from '../public/css/css-com';
import ImagePicker from 'react-native-image-crop-picker';
export default class SendNotice extends Component {
  back() {
    this.props.navigation.goBack(null);
  }

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      imgArr: [],
      imgAffix: [],
      value: false,
      text: '',
      id:1,
    };
  }
  delImg(id) {//删除图片
    var imgArr = this.state.imgArr;
    var op = [];
    for (var i in imgArr) {
      if (imgArr[i].id === id) {
        op.push(
          {id: imgArr[i].id, visible: 'none', path: imgArr[i].path}
        )
      } else {
        op.push(
          {id: imgArr[i].id, visible: imgArr[i].visible, path: imgArr[i].path}
        )
      }
    }
    this.setState({
      imgArr: op
    })
  }

  openFloder() {
    //alert('这是打开文件夹')
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image.path);
      //alert(this.state.id)
      this.state.imgArr.push({id: this.state.id, visible: null, path: image.path});
      this.setState({//放到这里只是为了渲染页面
        id: this.state.id + 1
      })
    });
  }



  sendNoticeNextStep() {
    this.props.navigation.navigate('SendNoticeNextStep')
  }

  noticeNextStep() {
    this.props.navigation.navigate('NoticeNextStep')
  }

  render() {
    let imgArr = this.state.imgArr;
    var list = [];
    for (var i = 0; i < imgArr.length; i++) {
      list.push(
        <View key={i} style={imgArr[i].visible?{display: imgArr[i].visible}:null}>
          <Image source={{uri: imgArr[i].path}} style={[com.wh64,com.mgr4,com.mgl4,com.mgt1,com.mgb8,]}/>
          <TouchableHighlight
            style={[com.posr,{top:-5,right:-5}]}
            onPress={this.delImg.bind(this,imgArr[i].id)}
            underlayColor="#f8f8f8"
          >
            <Image style={[com.MGR5,com.wh16]}
                   source={require('../imgs/del162.png')}/>
          </TouchableHighlight>
        </View>
      )
    }

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

            onPress={()=>this.sendNoticeNextStep()}
            underlayColor="#d5d5d5"
          >
            <View style={styles.navltys}>
              <Text style={[styles.fSelf,styles.navltyszt]}>下一步</Text>
            </View>

          </TouchableHighlight>
        </View>
        {/*内容主题*/}
        <ScrollView style={[com.FLEX,com.BCKF5]}>
          {/*详情*/}
          <View
            style={[com.BCKFFF,com.AIC,com.ROW,com.JCSB,com.PDL15,com.PDR15,com.MGT5,com.BTW,com.BBW,com.BCE6]}>
            <Text>公告标题</Text>
            <View style={{width:150}}>
              <TextInput
                style={{height: 40,}}
                underlineColorAndroid={'transparent'}
                numberOfLines={1}
                placeholder='请输入标题'
                secureTextEntry={false}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>

          </View>
          {/*图片+附件*/}
          <View style={[com.BCKFFF,com.PDT5,com.PDB15,com.PDL10,com.PDR10,com.MGT10,com.BTW,com.BBW,com.BCE6]}>
            {/*图片*/}
            <View style={[com.BBW,com.BCE6,com.PDB10]}>
              {/*TITLE*/}
              <TouchableHighlight
                onPress={()=>this.openFloder()}
                underlayColor="#f8f8f8"
              >
                <View style={[com.ROW,com.JCSB,com.PDB10]}>
                  <View style={[com.ROW]}>
                    <Text>图片</Text>
                    <Text>(第一张为封面)</Text>

                  </View>
                  <View style={[]}>
                    <Image style={[sef.imgLefCom]} source={require('../imgs/zxj32.png')}/>
                  </View>
                </View>
              </TouchableHighlight>
              {/*放置图片*/}
              <View style={[com.ROW,com.PDB10,com.PDT10,com.AIC,com.flww]}>
                {/*行级-图片缩略图和删除按钮*/}

                  {list}

              </View>
            </View>

            {/*附件*/}
            <View style={[com.PDT5]}>
              <View>
                <TouchableHighlight
                  onPress={()=>this.openAffix()}
                  underlayColor="#d5d5d5"
                >
                  <View style={[com.ROW,com.JCSB,com.MGB5]}>
                    <Text>附件</Text>
                    <Image style={[sef.imgLefCom]} source={require('../imgs/fj32.png')}/>
                  </View>
                </TouchableHighlight>
              </View>
              {/*附件内容容器*/}
              <View>
                <View style={[com.ROW,com.JCSB,com.AIC,com.MGB5]}>
                  <View style={[com.ROW,com.AIC]}>




                    <Text style={[com.CBE]}>000xxx000xxx.jpg</Text>
                  </View>
                  <View style={[com.AIC]}>
                    <TouchableHighlight
                      onPress={()=>this.delfj()}
                      underlayColor="#d5d5d5"
                    >
                      <Image style={[sef.imgSelfTwo,com.MGR5,sef.imgLefCom]}
                             source={require('../imgs/sc32.png')}/>
                    </TouchableHighlight>
                  </View>
                </View>

                <View style={[com.ROW,com.JCSB,com.AIC,com.MGB5]}>
                  <View style={[com.ROW,com.AIC]}>
                    <Image style={[sef.imgSelfTwo,com.MGR5,]}
                           source={require('../imgs/project.png')}/>
                    <Text style={[com.CBE]}>000xxx000xxx.jpg</Text>
                  </View>
                  <View style={[com.AIC]}>
                    <TouchableHighlight
                      onPress={()=>this.delfj()}
                      underlayColor="#d5d5d5"
                    >
                      <Image style={[sef.imgSelfTwo,com.MGR5,sef.imgLefCom]}
                             source={require('../imgs/sc32.png')}/>
                    </TouchableHighlight>
                  </View>
                </View>

              </View>

            </View>
          </View>
          {/*请输入公告内容*/}
          <View style={[{height:100},com.BCKFFF,com.MGT10,com.BTW,com.BCE6,com.PDT5,com.PDL10,com.PDR10,com.PDB10]}>
            <TextInput
              style={{height: 60,}}
              underlineColorAndroid={'transparent'}
              numberOfLines={5}
              placeholder='请输入公告内容'
              multiline={true}
              //maxLength={10}
              //textAlignVertica={'top'}
              secureTextEntry={false}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
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
  imgSelfTwo: {
    width: 30,
    height: 30,
  },
  imgSelfFour: {//父级-块-图片和右上角的删除按钮容器
    position: 'relative',
  },
  imgSelfThree: {
    position: 'absolute',
    top: -5,
    right: -5
  },
  imgSelfFive: {
    width: 10,
    height: 10,
  },
  imgLefCom: {
    width: 16,
    height: 16
  },
});
