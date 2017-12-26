import React, { Component } from 'react';
import { AppRegistry,
    ListView,
    StyleSheet,
    View,
    Text,
    Button,
    ScrollView,
    Image
    } from 'react-native';
import { StackNavigator,TabNavigator } from "react-navigation";
import Home from '../home/home';
import Chat from '../chat/chat';
import Customer from '../customer/customer';
import Daily from '../daily/daily';
import DailyDetail from '../daily/dailyDetail';
import DailyDetailT from '../daily/index/dailyDetailT';
import DailyDetailVisit from '../daily/index/dailyDetailVisit';
import DailyDetailTask from '../daily/index/dailyDetailTask';
import DailyDetailMeeting from '../daily/index/dailyDetailMeeting';
import DailyDetailTrain from '../daily/index/dailyDetailTrain';
import DailyDetailTaskCT from '../daily/index/dailyDetailTaskCT';
import DailyDetailTaskCTVR from '../daily/index/dailyDetailTaskCTVR';
import DailyDetailTaskAT from '../daily/index/dailyDetailTaskAT';
import DailyDetailTaskATNBT from '../daily/index/dailyDetailTaskATNBT';
import DailyDetailVisitPVR from '../daily/index/dailyDetailVisitPVR';
import DailyDetailVisitVR from '../daily/index/dailyDetailVisitVR';
import DailyDetailMeetingMR from '../daily/index/dailyDetailMeetingMR';
import My from '../my/my';
//首页nav右边-设置页面
import Set from '../home/set';
//报表页面-拜访统计
import StatVist from '../home/repor/statVist';
//公共-分享页面
import Share from '../home/share';
//报表nav右面-订阅页面
import AddRss from '../home/repor/addRss';

//报表页面-客户被拜访
import ClientByVist from '../home/repor/clientByVist';
//报表页面-新增客户统计
import AddClient from '../home/repor/addClient';
//报表页面-客户总量统计
import ClientGross from '../home/repor/clientGross';
//报表页面-员工定位轨迹
import EmployeeLocation from '../home/repor/employeeLocation';
//报表页面-员工电子围栏
import EmployeeRail from '../home/repor/employeeRail';

//首页-图标导航区域-商机
//import Business from '../home/business';
import BusinessTest from '../home/businessTest';
//商机页面-nav-新建
import NewBulidBusiness from '../home/newBulidBusiness';
//首页-理单
import Sheet from '../home/sheet';

//首页-合同
import Contract from '../home/contract';
//合同页面-nav-新建
import NewBulidContract from '../home/newBulidContract';
//首页-订单
import Order from '../home/order';
//订单页面-nav-新建
import NewBulidOrder from '../home/newBulidOrder';
//首页-目标
import Aim from '../home/aim';
//首页-审批
import Approval from '../home/approval';
//审批页面-nav-筛选审批
import NewBulidApproval from '../home/newBulidApproval';

//首页-日志
import Log from '../home/log/log';
//首页-今天日志
import LogTody from '../home/log/logTody';
//首页-日报表
import LogTodyReport from '../home/log/logTodyReport';
//首页-周报表
import LogWeekReport from '../home/log/logWeekReport';
//首页-月报表
import LogMonthReport from '../home/log/logMonthReport';
//首页-选择报表模板
import LogTemplate from '../home/log/logTemplate';
//首页-选择报表模板
import LogNewBulidTemplate from '../home/log/logNewBulidTemplate';

//首页-log-销量
import LogSalecount from '../home/log/logSalecount';
//首页-log-销量使用
import LogSalecountUse from '../home/log/logSalecountUse';
//首页-log-人力
import LogManpower from '../home/log/logManpower';
//首页-log-人力使用
import LogManpowerUse from '../home/log/logManpowerUse';
//首页-log-销售
import LogSale from '../home/log/logSale';
//首页-log-销售使用
import LogSaleUse from '../home/log/logSaleUse';
//首页-log-模板添加组
import LogTemplateAddGroup from '../home/log/logTemplateAddGroup';
//首页-log-模板样式预览
import LogTemplateStylePreview from '../home/log/logTemplateStylePreview';
//首页-log-设置日志模板
import LogTemplateSet from '../home/log/logTemplateSet';
//首页-log-日至详情
import LogDetail from '../home/log/logDetail';
import LogDetailSef from '../home/log/logDetailSef';
//首页-log-跳转搜索
import SkipSearch from '../home/skipSearch';

//首页-必达
import Mustreach from '../home/mustreach';
//首页-公告
import Notice from '../home/notice';
//公告-nav-发公告
import SendNotice from '../home/sendNotice';
//公告详情
import NoticeDetail from '../home/noticeDetail';
//发公告
import SendNoticeNextStep from '../home/sendNoticeNextStep';
//预览公告
import NoticePreview from '../home/noticePreview';
//选择员工
import ChooseRange from '../home/chooseRange';
//首页-考勤
import Attendance from '../home/attendance';
//审批页面-nav-筛选审批
import AttendanceSet from '../home/attendanceSet';
//首页-线路拜访
import LineVisit from '../home/lineVisit';
//线路拜访页面-nav-新建线路
import NewBulidLine from '../home/newBulidLine';
//首页-项目
import Project from '../home/project';
//首页-产品
import Product from '../home/product';
//产品页面-nav-新增产品
import NewBulidProduct from '../home/newBulidProduct';
//首页-价格表
import PriceList from '../home/priceList';
//价格表页面-nav-新增价格表
import NewBulidPriceList from '../home/newBulidPriceList';
//产品详情
import ProductDetail from '../home/productDetail';


//日程


import DaliyNBVisit from '../daily/daliyNBVisit';
import DaliyLVisit from '../daily/daliyLVisit';
import DaliyNBTask from '../daily/daliyNBTask';
import DaliyNBMetting from '../daily/daliyNBMetting';
import DaliyNBTrain from '../daily/daliyNBTrain';
import DaliyLCClient from '../daily/daliyLCClient';
import DaliyNBClient from '../daily/daliyNBClient';
import DaliyChoosePeople from '../daily/daliyChoosePeople';
import DaliyChoosePeopleAnd from '../daily/daliyChoosePeopleAnd';
import DaliyVisitDescribe from '../daily/daliyVisitDescribe';
import DailyRemind from '../daily/dailyRemind';
import DailyList from '../daily/dailyList';

//报表页面
import Report from '../home/repor/report';

const MyApp = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                    />
            )
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarLabel: '沟通',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/chat.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                    />
            )
        }
    },
    Customer: {
        screen: Customer,
        navigationOptions: {
            tabBarLabel: '客户',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/customer.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                    />
            )
        }
    },
    Daily: {
        screen: Daily,
        navigationOptions: {
            tabBarLabel: '日程',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/daily.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                    />
            )
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/my.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                    />
            )
        }
    }
}, {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    swipeEnabled: false, // 禁止左右滑动
    tabBarOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor: '#999', // 文字和图片默认颜色
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        labelStyle: {
            fontSize: 12,
        },
        iconStyle: {
            height: 26,
            width: 26
        },
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        style: {
            backgroundColor: '#F0F1F2',
        }
    },
});
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
const app = StackNavigator({
    Home: {screen: MyApp, navigationOptions: {header: null}},
    //Page: {screen: Page,navigationOptions: {header: null}},
    Report: {screen: Report, navigationOptions: {header: null}},
    DailyDetail: {screen: DailyDetail, navigationOptions: {header: null}},
    Set: {screen: Set, navigationOptions: {header: null}},
    StatVist: {screen: StatVist, navigationOptions: {header: null}},
    Share: {screen: Share, navigationOptions: {header: null}},
    
    ClientByVist: {screen: ClientByVist, navigationOptions: {header: null}},
    AddClient: {screen: AddClient, navigationOptions: {header: null}},
    ClientGross: {screen: ClientGross, navigationOptions: {header: null}},
    
    EmployeeLocation: {screen: EmployeeLocation, navigationOptions: {header: null}},
    EmployeeRail: {screen: EmployeeRail, navigationOptions: {header: null}},
    
    AddRss: {screen: AddRss, navigationOptions: {header: null}},
    
    //Business: {screen: Business,navigationOptions: {header: null}},
    BusinessTest: {screen: BusinessTest, navigationOptions: {header: null}},
    NewBulidBusiness: {screen: NewBulidBusiness, navigationOptions: {header: null}},
    Sheet: {screen: Sheet, navigationOptions: {header: null}},
    
    Contract: {screen: Contract, navigationOptions: {header: null}},
    NewBulidContract: {screen: NewBulidContract, navigationOptions: {header: null}},
    
    Order: {screen: Order, navigationOptions: {header: null}},
    NewBulidOrder: {screen: NewBulidOrder, navigationOptions: {header: null}},
    
    Aim: {screen: Aim, navigationOptions: {header: null}},
    
    Approval: {screen: Approval, navigationOptions: {header: null}},
    NewBulidApproval: {screen: NewBulidApproval, navigationOptions: {header: null}},
    
    Log: {screen: Log, navigationOptions: {header: null}},
    LogTody: {screen: LogTody, navigationOptions: {header: null}},
    LogTodyReport: {screen: LogTodyReport, navigationOptions: {header: null}},
    LogWeekReport: {screen: LogWeekReport, navigationOptions: {header: null}},
    LogMonthReport: {screen: LogMonthReport, navigationOptions: {header: null}},
    LogTemplate: {screen: LogTemplate, navigationOptions: {header: null}},
    LogTemplateSet: {screen: LogTemplateSet, navigationOptions: {header: null}},
    LogTemplateStylePreview: {screen: LogTemplateStylePreview, navigationOptions: {header: null}},
    LogDetail: {screen: LogDetail, navigationOptions: {header: null}},
    LogDetailSef: {screen: LogDetailSef, navigationOptions: {header: null}},
    SkipSearch: {screen: SkipSearch, navigationOptions: {header: null}},
    LogTemplateAddGroup: {screen: LogTemplateAddGroup, navigationOptions: {header: null}},
    LogNewBulidTemplate: {screen: LogNewBulidTemplate, navigationOptions: {header: null}},
    
    
    LogSalecount: {screen: LogSalecount, navigationOptions: {header: null}},
    LogSalecountUse: {screen: LogSalecountUse, navigationOptions: {header: null}},
    LogManpower: {screen: LogManpower, navigationOptions: {header: null}},
    LogManpowerUse: {screen: LogManpowerUse, navigationOptions: {header: null}},
    LogSale: {screen: LogSale, navigationOptions: {header: null}},
    LogSaleUse: {screen: LogSaleUse, navigationOptions: {header: null}},
    //LogAddGroup: {screen: LogAddGroup, navigationOptions: {header: null}},
    
    Mustreach: {screen: Mustreach, navigationOptions: {header: null}},
    
    Notice: {screen: Notice, navigationOptions: {header: null}},
    NoticeDetail: {screen: NoticeDetail, navigationOptions: {header: null}},
    SendNoticeNextStep: {screen: SendNoticeNextStep, navigationOptions: {header: null}},
    SendNotice: {screen: SendNotice, navigationOptions: {header: null}},
    ChooseRange: {screen: ChooseRange, navigationOptions: {header: null}},
    NoticePreview: {screen: NoticePreview, navigationOptions: {header: null}},
    
    Attendance: {screen: Attendance, navigationOptions: {header: null}},
    AttendanceSet: {screen: AttendanceSet, navigationOptions: {header: null}},
    
    LineVisit: {screen: LineVisit, navigationOptions: {header: null}},
    NewBulidLine: {screen: NewBulidLine, navigationOptions: {header: null}},
    
    Project: {screen: Project, navigationOptions: {header: null}},
    
    Product: {screen: Product, navigationOptions: {header: null}},
    ProductDetail: {screen: ProductDetail, navigationOptions: {header: null}},
    NewBulidProduct: {screen: NewBulidProduct, navigationOptions: {header: null}},
    
    PriceList: {screen: PriceList, navigationOptions: {header: null}},
    NewBulidPriceList: {screen: NewBulidPriceList, navigationOptions: {header: null}},

    DailyDetailT: {screen: DailyDetailT, navigationOptions: {header: null}},
    DailyDetailVisit: {screen: DailyDetailVisit, navigationOptions: {header: null}},
    DailyDetailTrain: {screen: DailyDetailTrain, navigationOptions: {header: null}},
    DailyDetailMeeting: {screen: DailyDetailMeeting, navigationOptions: {header: null}},
    DailyDetailTask: {screen: DailyDetailTask, navigationOptions: {header: null}},

    DaliyNBVisit: {screen: DaliyNBVisit, navigationOptions: {header: null}},
    DaliyLVisit: {screen: DaliyLVisit, navigationOptions: {header: null}},
    DaliyNBTask: {screen: DaliyNBTask, navigationOptions: {header: null}},
    DaliyNBMetting: {screen: DaliyNBMetting, navigationOptions: {header: null}},
    DaliyNBTrain: {screen: DaliyNBTrain, navigationOptions: {header: null}},
    DaliyLCClient: {screen: DaliyLCClient, navigationOptions: {header: null}},
    DaliyNBClient: {screen: DaliyNBClient, navigationOptions: {header: null}},
    DaliyChoosePeople: {screen: DaliyChoosePeople, navigationOptions: {header: null}},
    DaliyChoosePeopleAnd: {screen: DaliyChoosePeopleAnd, navigationOptions: {header: null}},
    DaliyVisitDescribe: {screen: DaliyVisitDescribe, navigationOptions: {header: null}},
    DailyRemind: {screen: DailyRemind, navigationOptions: {header: null}},
    DailyList: {screen: DailyList, navigationOptions: {header: null}},
    DailyDetailTaskCT: {screen: DailyDetailTaskCT, navigationOptions: {header: null}},
    DailyDetailTaskAT: {screen: DailyDetailTaskAT, navigationOptions: {header: null}},
    DailyDetailTaskATNBT: {screen: DailyDetailTaskATNBT, navigationOptions: {header: null}},
    DailyDetailVisitPVR: {screen: DailyDetailVisitPVR, navigationOptions: {header: null}},
    DailyDetailVisitVR: {screen: DailyDetailVisitVR, navigationOptions: {header: null}},
    DailyDetailTaskCTVR: {screen: DailyDetailTaskCTVR, navigationOptions: {header: null}},
    DailyDetailMeetingMR: {screen: DailyDetailMeetingMR, navigationOptions: {header: null}},

    
});
module.exports = app;