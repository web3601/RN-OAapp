/**
 * Created by Administrator on 2017/6/15.
 */
import {
  StyleSheet,
} from 'react-native';
const cos = StyleSheet.create({
  body: {
    flex: 1,
  },
  nav: {//头部导航
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  sz: {//导航图标
    width: 24,
    height: 24
  },
  fSelf: {//导航字体相关
    color: '#000',
    fontSize: 16,
  },
  //公共自定义样式
  //布局样式
  //混合样式
  rja_rsc:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex:{
    flex:1
  },
  row: {
    flexDirection: 'row',
  },
  jsb: {
    justifyContent: 'space-between',
  },
  jc:{
    justifyContent: 'center',
  },
  ac: {
    alignItems: 'center',
  },

  //边框样式
  bw: {borderWidth: 1},
  btw:{borderTopWidth: 1},
  brw:{borderRightWidth: 1},
  blw:{borderLeftWidth: 1},
  bbw: {borderBottomWidth: 1},
  bce6:{borderColor:'#e6e6e6'},
    //边框混合样式
  bwc: {borderWidth: 1,borderColor:'#e6e6e6'},
  btwc:{borderTopWidth: 1,borderColor:'#e6e6e6'},
  brwc:{borderRightWidth: 1,borderColor:'#e6e6e6'},
  blwc:{borderLeftWidth: 1,borderColor:'#e6e6e6'},
  bbwc: {borderBottomWidth: 1,borderColor:'#e6e6e6'},

  //字体
  fs10:{fontSize:10},
  fs12:{fontSize:12},
  fs14:{fontSize:14},
  fs16:{fontSize:16},
  fs18:{fontSize:18},
  fs20:{fontSize:20},
  ce0:{
    color:'#e0e0e0'
  },
  cff:{
    color:'#fff'
  },
  cbe:{
    color:'#BEBEBE'
  },

  //BackgroundColor
  bgce6:{
    backgroundColor:'#E6E6E6'
  },
  bgcf5:{
    backgroundColor:'#F5F5F5'
  },
  bgcff:{
    backgroundColor:'#FFF'
  },
//padding
  //混合模式
  pdt5l10:{
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10
  },
  pdt5l15:{
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15
  },
  pdt10l15:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15
  },
  pd5:{padding:5,},
  pd10:{padding:10,},
  pd15:{padding:15,},

  pdt5:{paddingTop:5,},
  pdt10:{paddingTop:10,},
  pdt15:{paddingTop:15},

  pdb5:{paddingBottom:5},
  pdb10:{paddingBottom:10},
  pdb15:{paddingBottom:15},

  pdl5:{paddingLeft:5},
  pdl10:{paddingLeft:10},
  pdl15:{paddingLeft:15},

  pdr5:{paddingRight:5},
  pdr10:{paddingRight:10},
  pdr15:{paddingRight:15},


  //margin
  mg5:{margin:5},
  mg10:{margin:10},
  mg15:{margin:15},

  mgt5:{marginTop:5},
  mgt10:{marginTop:10},
  mgt15:{marginTop:15},

  mgb5:{marginBottom:5},
  mgb10:{marginBottom:10},
  mgb15:{marginBottom:15},

  mgl5:{marginLeft:5},
  mgl10:{marginLeft:10},
  mgl15:{marginLeft:15},

  mgr5:{marginRight:5},
  mgr10:{marginRight:10},
  mgr15:{marginRight:15},

})
module.exports = cos;
