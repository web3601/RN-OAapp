import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  Image,
  Platform,
  ScrollView,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import styles from '../public/css/css-business';

export default class Business extends Component {

  //控制层
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  setVisibleModal(visible) {
    this.setState({show: visible});
  }


  back() {
    this.props.navigation.goBack(null);
  }


  newBulidBusiness() {
    this.props.navigation.navigate('NewBulidBusiness')
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
            <View style={styles.navltys}>
              <Image source={require('../imgs/navxy.png')}/>
              <Text style={[styles.fSelf,styles.navltyszt]}>返回</Text>
            </View>

          </TouchableHighlight>
          <Text style={styles.fSelf}>商机</Text>
          {/*
           <TouchableHighlight
           onPress={()=>this.newBulidBusiness()}
           underlayColor="#d5d5d5"
           >

           <View style={styles.navltys}>
           <Image style={[styles.ImgSelf]} source={require('../imgs/navtx.png')}/>
           </View>

           </TouchableHighlight>
           */}


          {/*View层*/}
          <TouchableOpacity style={styles.icon_touch2} onPress={() => {{this.setState({show: !this.state.show})}}}>
            <View style={styles.navltys}>
              {/*<Image style={[styles.navltysImg]} source={require('../imgs/product/slh32.png')}/>*/}
              <Text>测试</Text>
            </View>
          </TouchableOpacity>


        </View>
        {/*内容主题*/}
        <ScrollView style={styles.childContent}>
          <View style={[styles.common]}>

          </View>
        </ScrollView>


        {/* 添加模型 */}
        <View>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={{width:screenW,height:screenH,backgroundColor:'#555',opacity:0.6}}>
              <TouchableOpacity style={{flex:1,height:screenH}} onPress={() => {
  this.setVisibleModal(!this.state.show)
}}></TouchableOpacity>
            </View>
            <View style={styles.addCustomer}>
              <View style={styles.addCustomer_card}>
                <TouchableOpacity style={styles.customerCard_content}
                                  onPress={() => { this.setVisibleModal(!this.state.show)}}>
                  <Text style={{color:'#333'}}>编辑产品</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.customerCard_content}
                                  onPress={() => { this.setVisibleModal(!this.state.show);this.goPage_customerAdd()}}>
                  <Text style={{color:'#333'}}>删除产品</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.customerCard_content,styles.customerCard_content2]}
                                  onPress={() => { this.setVisibleModal(!this.state.show)}}>
                  <Text style={{color:'#555'}}>取消</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>


      </View>
    )
      ;
  }
}

