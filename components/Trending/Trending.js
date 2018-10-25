import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Icon, Button } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, Dimensions, Share } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Color } from '@common';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import { ScrollView } from 'react-native-gesture-handler';

export default class Trending extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    // state = {
    //     mute: false,
    //     toggleDsc: false,
    //     toggleDsc1: false,
    //     toggleDsc2: false,
    //     toggleDsc3: false,
    //     shouldPlay: true,
    // }

    // handlePlayAndPause = () => {
    //     this.setState((prevState) => ({
    //         shouldPlay: !prevState.shouldPlay
    //     }));
    // }

    // handleVolume = () => {
    //     this.setState(prevState => ({
    //         mute: !prevState.mute,
    //     }));
    // }

    // openShare() {
    //     Share.share({
    //         message: 'BAM: we\'re helping your business with awesome React Native apps',
    //         url: 'http://bam.tech',
    //         title: 'Wow, did you see that?'
    //     }, {
    //             // Android only:
    //             dialogTitle: 'Share BAM goodness',
    //             // iOS only:
    //             excludedActivityTypes: [
    //                 'com.apple.UIKit.activity.PostToTwitter'
    //             ]
    //         })
    // }


    // renderViewMore(onPress) {
    //     return (
    //         <Text onPress={onPress} style={styles.seeMore}>See More</Text>
    //     )
    // };
    // renderViewLess(onPress) {
    //     return (
    //         <Text onPress={onPress} style={styles.seeMore}>See Less</Text>
    //     )
    // };

    render() {
        // const { toggleDsc, toggleDsc1, toggleDsc2, toggleDsc3 } = this.state
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.awardBoxArea}>
                        <TouchableOpacity style={styles.awardBox}>
                            <Text style={styles.awardTitle}>This Month</Text>
                            <Image style={styles.awardImg} source={require('../images/arard1.png')} />
                            <Text style={styles.awardName}>Modi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.awardBox}>
                            <Text style={styles.awardTitle}>This Week</Text>
                            <Image style={styles.awardImg} source={require('../images/award2.png')} />
                            <Text style={styles.awardName}>Chandrababu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.awardBoxArea}>
                        <TouchableOpacity style={styles.awardBox}>
                            <Text style={styles.awardTitle}>This Month</Text>
                            <Image style={styles.awardImg} source={require('../images/arard1.png')} />
                            <Text style={styles.awardName}>Modi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.awardBox}>
                            <Text style={styles.awardTitle}>This Week</Text>
                            <Image style={styles.awardImg} source={require('../images/award2.png')} />
                            <Text style={styles.awardName}>Chandrababu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.awardBoxArea}>
                        <TouchableOpacity style={styles.awardBox}>
                            <Text style={styles.awardTitle}>This Month</Text>
                            <Image style={styles.awardImg} source={require('../images/arard1.png')} />
                            <Text style={styles.awardName}>Modi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.awardBox}>
                            <Text style={styles.awardTitle}>This Week</Text>
                            <Image style={styles.awardImg} source={require('../images/award2.png')} />
                            <Text style={styles.awardName}>Chandrababu</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.innerBg,
        paddingHorizontal: 10,
        paddingVertical:15,
    },
    awardBoxArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
   awardBox:{
        width:150,
        height:150,
        borderWidth:1,
        borderColor:Color.borderColor,
        padding:10,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
   },
   awardTitle:{
        fontSize:16,
        color:Color.primary,
        fontWeight:'bold',
        paddingBottom:10,
        textAlign:'center',
   },
   awardName:{
        fontSize:16,
        color:Color.black,
        fontWeight:'bold',    
        textAlign:'center',
    },
    awardImg:{
        width:48,
        height:48,
        marginBottom:15,
    },

});
