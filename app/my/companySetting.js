/**
 * Created by Administrator on 2017/6/12.
 */
/**
 * Created by Administrator on 2017/6/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Alert,
    ScrollView,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity,
    } from 'react-native';

export default class CompanySetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            text:'',
        };
    }
    OpBack() {
        this.props.navigation.goBack()
    };
    depart(){
        this.props.navigation.navigate('DepartEmployee')
    }
    render(){
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={()=>this.OpBack()}
                        >
                        <View style={styles.backAll} >
                            <Image  style={styles.back} source={require('../imgs/lljt.png')}/>
                            <Text style={styles.backwz}>
                                 返回
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.info}
                        >企业设置
                    </Text>
                </View>
                <ScrollView style={styles.childContent}>
                    <View style={styles.employeeManage}>
                        <Image />
                        <Text style={styles.employeeManageTitle}>员工管理</Text>
                    </View>
                    <View style={styles.employeeManageContent}>
                        <TouchableNativeFeedback
                            onPress={()=>this.depart()}
                            >
                            <View style={styles.employeeDepartManage}>
                                <View style={styles.tubiaoBorder1}>
                                    <Image  style={styles.tubiao} source={require('../imgs/depart.png')}/>
                                </View>
                                <Text style={styles.wenzi}>部门管理</Text>
                                <Text style={styles.wenzibu}>调整部门和员工</Text>
                                <Image  style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={()=>this.depart()}
                            >
                            <View style={styles.employeeKqManage}>
                            <View style={styles.tubiaoBorder2}>
                                <Image  style={styles.tubiao} source={require('../imgs/kaoqin.png')}/>
                            </View>
                            <Text style={styles.wenzi}>考勤管理</Text>
                            <Text style={styles.wenzibu}>设置员工上班时间</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        </TouchableNativeFeedback>
                        <View style={styles.employeeDwManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            borderColor:'#FFCCFF',
                                            backgroundColor:'#FFCCFF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/employeedw.png')}/>
                            </View>
                            <Text style={styles.wenzi}>员工定位管理</Text>
                            <Text style={styles.wenzibu}>设置员工定位轨迹和电子围栏</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </View>

                    <View style={styles.achievementManage}>
                        <Text style={styles.achievementManageTitle}>业务管理</Text>
                    </View>
                    <View style={styles.achievementManageContent}>
                        <View style={styles.achievementDepartManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            borderColor:'#CC3333',
                                            backgroundColor:'#CC3333',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/muban.png')}/>
                            </View>
                            <Text style={styles.wenzi}>模板管理</Text>
                            <Text style={styles.wenzibu}>日程汇报，日志，审批的模板配置</Text>
                            <Image  style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementKhManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            borderColor:'#CC3333',
                                            backgroundColor:'#CC3333',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/customer.png')}/>
                            </View>
                            <Text style={styles.wenzi}>客户管理</Text>
                            <Text style={styles.wenzibu}>栏位、分配、编辑权限等</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDwManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            borderColor:'#66CCFF',
                                            backgroundColor:'#66CCFF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/project.png')}/>
                            </View>
                            <Text style={styles.wenzi}>项目管理</Text>
                            <Text style={styles.wenzibu}>项目的自定义栏位</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDepartManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            borderColor:'#33FFFF',
                                            backgroundColor:'#33FFFF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/chanpin.png')}/>
                            </View>
                            <Text style={styles.wenzi}>产品管理</Text>
                            <Text style={styles.wenzibu}>产品的分类管理</Text>
                            <Image  style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementKhManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            borderColor:'#FFCCFF',
                                            backgroundColor:'#FFCCFF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/qyapply.png')}/>
                            </View>
                            <Text style={styles.wenzi}>企业应用管理</Text>
                            <Text style={styles.wenzibu}>栏位、分配、编辑权限等</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDwManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            borderColor:'#0099FF',
                                            backgroundColor:'#0099FF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/price.png')}/>
                            </View>
                            <Text style={styles.wenzi}>价格表管理</Text>
                            <Text style={styles.wenzibu}>产品价格表的编辑和分配</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </View>

                    <View style={styles.achievementManage}>
                        <Text style={styles.achievementManageTitle}>CRM管理</Text>
                    </View>
                    <View style={styles.CRMManageContent}>
                        <View style={styles.achievementDepartManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#FF3300',
                                            //backgroundColor:'#FF3300',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/sjgl.png')}/>
                            </View>
                            <Text style={styles.wenzi}>商机管理</Text>
                            <Text style={styles.wenzibu}>CRM销售阶段设置及审批设置</Text>
                            <Image  style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementKhManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#33CCFF',
                                            //backgroundColor:'#33CCFF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/xiansuo.png')}/>
                            </View>
                            <Text style={styles.wenzi}>线索管理</Text>
                            <Text style={styles.wenzibu}>栏位、分配、编辑权限等</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDwManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#FFCCFF',
                                            //backgroundColor:'#FFCCFF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/publicsea.png')}/>
                            </View>
                            <Text style={styles.wenzi}>公海管理</Text>
                            <Text style={styles.wenzibu}>项目的自定义栏位</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDepartManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#CC3333',
                                            //backgroundColor:'#CC3333',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/contract.png')}/>
                            </View>
                            <Text style={styles.wenzi}>合同管理</Text>
                            <Text style={styles.wenzibu}>产品的分类管理</Text>
                            <Image  style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementKhManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#33FF99',
                                            //backgroundColor:'#33FF99',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/order.png')}/>
                            </View>
                            <Text style={styles.wenzi}>订单管理</Text>
                            <Text style={styles.wenzibu}>栏位、分配、编辑权限等</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDwManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#9966CC',
                                            //backgroundColor:'#9966CC',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/free.png')}/>
                            </View>
                            <Text style={styles.wenzi}>费用管理</Text>
                            <Text style={styles.wenzibu}>产品价格表的编辑和分配</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDepartManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#CC3333',
                                            //backgroundColor:'#CC3333',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/backmoney.png')}/>
                            </View>
                            <Text style={styles.wenzi}>回款管理</Text>
                            <Text style={styles.wenzibu}>日程汇报，日志，审批的模板配置</Text>
                            <Image  style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementKhManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#FFCCFF',
                                            //backgroundColor:'#FFCCFF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/linkperson.png')}/>
                            </View>
                            <Text style={styles.wenzi}>联系人管理</Text>
                            <Text style={styles.wenzibu}>栏位、分配、编辑权限等</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.achievementDwManage}>
                            <View style={{ width:30,
                                            height:30,
                                            borderWidth:1,
                                            //borderColor:'#0099FF',
                                            //backgroundColor:'#0099FF',
                                            borderRadius: 15,
                                            position:'absolute',
                                            top:6,
                                            left:3,}}>
                                <Image  style={styles.tubiao} source={require('../imgs/prevent.png')}/>
                            </View>
                            <Text style={styles.wenzi}>防撞单模式</Text>
                            <Text style={styles.wenzibu}>项目的自定义栏位</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </View>

                    <View style={styles.employeeManage}>
                        <Text style={styles.employeeManageTitle}>高级功能</Text>
                    </View>
                    <View style={styles.employeeManageContent}>
                        <View style={styles.employeeDepartManage}>
                            <View style={styles.tubiaoBorder1}>
                                <Image  style={styles.tubiao} source={require('../imgs/rubbsh.png')}/>
                            </View>
                            <Text style={styles.wenzi}>数据回收站</Text>
                            <Text style={styles.wenzibu}>已删除客户、模板和离职员工</Text>
                            <Image  style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.employeeKqManage}>
                            <View style={styles.tubiaoBorder2}>
                                <Image  style={styles.tubiao} source={require('../imgs/datasafe.png')}/>
                            </View>
                            <Text style={styles.wenzi}>数据安全</Text>
                            <Text style={styles.wenzibu}>显示水印防截图，手机号智能隐藏</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={styles.employeeDwManage}>
                            <View style={styles.tubiaoBorder3}>
                                <Image  style={styles.tubiao} source={require('../imgs/mycom.png')}/>
                            </View>
                            <Text style={styles.wenzi}>我的企业</Text>
                            <Text style={styles.wenzibu}>修改企业名称。解散企业</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ancestorCon: {
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    childContent: {//子容器页面级
        flex: 1
        //justifyContent: 'space-between',
    },
    container: {
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderBottomColor:'#F0F0F0',
        height: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginBottom:10,
    },
    backAll:{
        width:60,
        height:30,
        flexDirection: 'row',
        alignItems:'flex-start',
    },
    back: {
        width:20,
        height:20,
        marginTop:7,
    },
    backwz: {
        marginTop:7,
        color: 'red',
    },
    info:{
        marginLeft:100,
        marginTop:7,
    },
    employeeManage:{
        backgroundColor: '#F0F1F2',
        marginTop:-3,
    },
    employeeManageTitle:{
        paddingTop:-7,
        paddingLeft:3,
        fontSize:12,
    },
    employeeManageContent:{
        height: 132,
        backgroundColor: '#fff',
        marginBottom:10,
    },
    employeeDepartManage:{
        height:44,
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        position: 'relative',
    },
    tubiaoBorder1:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:'pink',
        backgroundColor:'pink',
        borderRadius: 15,
        position:'absolute',
        top:6,
        left:3,
    },
    tubiaoBorder2:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:'#9966CC',
        backgroundColor:'#9966CC',
        borderRadius: 15,
        position:'absolute',
        top:6,
        left:3,
    },
    tubiaoBorder3:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:'#99FFFF',
        backgroundColor:'#99FFFF',
        borderRadius: 15,
        position:'absolute',
        top:6,
        left:3,
    },
    tubiao:{
        marginTop:6,
        marginLeft:7,
        width:15,
        height:15,
    },
    wenzi:{
        position:'absolute',
        top:6,
        left:40,
        color:"#000",
        fontSize:12,
    },
    wenzibu:{
        position:'absolute',
        top:20,
        left:40,
        color:'#ccc',
        fontSize:12,
    },
    rjt:{
        width: 16,
        height: 16,
        position:'absolute',
        top:15,
        left:360
    },
    employeeKqManage:{
        height:44,
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        position: 'relative',
    },
    employeeDwManage:{
        height:44,
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        position: 'relative',
    },
    achievementManage:{
        backgroundColor: '#F0F1F2',
        marginTop:-3,
    },
    achievementManageTitle:{
        paddingTop:-7,
        paddingLeft:3,
        fontSize:12,
    },
    achievementManageContent:{
        height: 264,
        backgroundColor: '#fff',
        marginBottom:10,
    },
    achievementDepartManage:{
        height:44,
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        position: 'relative',
    },
    achievementDwManage:{
        height:44,
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        position: 'relative',
    },
    achievementKhManage:{
        height:44,
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        position: 'relative',
    },
    CRMManageContent:{
        height: 396,
        backgroundColor: '#fff',
        marginBottom:10,
    },
});
