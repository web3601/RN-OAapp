/**
 * Created by Administrator on 2017/6/9.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text,
    WebView,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';

const {width, height} = Dimensions.get('window');

const url = "http://www.qichacha.com/";
export default class WebViewExample extends Component {

    constructor(props) {
        super(props);
    }
    OpBack() {
        this.props.navigation.goBack()
    };
    render() {
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                        <View style={styles.backAll} >
                            <TouchableOpacity
                                onPress={()=>this.OpBack()}
                                >
                                <Image  style={styles.back} source={require('../imgs/lljt.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                    onPress={()=>this.OpBack()}
                                    >
                                <Text style={styles.backwz}>
                                    返回
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.close} onPress={()=>this.OpBack()}>
                                关闭
                            </Text>
                        </View>

                    <Text style={styles.info}
                        >企业工商信息
                    </Text>
                </View>
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'#F0F1F2'}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ancestorCon: {
        flex: 1,
        backgroundColor: '#F0F1F2',
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
        width:90,
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
    close:{
        marginTop:7,
        marginLeft:10,
        color: 'red',
    },
    info: {
        marginLeft:70,
        marginTop:7,
    },
});

