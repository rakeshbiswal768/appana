import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Icon, Button } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, Dimensions, Share } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Color } from '@common';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import { ScrollView } from 'react-native-gesture-handler';

export default class Feed extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    state = {
        mute: false,
        toggleDsc: false,
        toggleDsc1: false,
        toggleDsc2: false,
        toggleDsc3: false,
        shouldPlay: true,
    }

    handlePlayAndPause = () => {
        this.setState((prevState) => ({
            shouldPlay: !prevState.shouldPlay
        }));
    }

    handleVolume = () => {
        this.setState(prevState => ({
            mute: !prevState.mute,
        }));
    }

    openShare() {
        Share.share({
            message: 'BAM: we\'re helping your business with awesome React Native apps',
            url: 'http://bam.tech',
            title: 'Wow, did you see that?'
        }, {
                // Android only:
                dialogTitle: 'Share BAM goodness',
                // iOS only:
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            })
    }


    renderViewMore(onPress) {
        return (
            <Text onPress={onPress} style={styles.seeMore}>See More</Text>
        )
    };
    renderViewLess(onPress) {
        return (
            <Text onPress={onPress} style={styles.seeMore}>See Less</Text>
        )
    };

    render() {
        const { toggleDsc, toggleDsc1, toggleDsc2, toggleDsc3 } = this.state
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.videoHeader}>
                            <View style={styles.dateBox}>
                                <View><Text style={styles.dtTxt}>24</Text></View>
                                <View><Text style={styles.dayTxt}>Mon</Text><Text style={styles.dayTxt}>Sept</Text></View>
                            </View>
                        </View>

                        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} style={styles.videoSlider}>
                            <View style={styles.videoBox}>
                                <View style={styles.videoPlayer}>
                                    <VideoPlayer
                                        videoProps={{
                                            shouldPlay: false,
                                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                                            source: {
                                                uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                                            },
                                        }}
                                        isPortrait={true}
                                        playFromPositionMillis={0}
                                    />
                                </View>
                                <View style={styles.videoTitle}>
                                    <Text style={styles.videoTitleTxt}>How do you do XYZ ?</Text>
                                    <TouchableOpacity style={styles.shareIcon} onPress={() => { this.openShare() }}>
                                        <Icon name='share' style={styles.share} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.videoContent}>
                                    <TouchableOpacity onPress={() => this.setState({ toggleDsc: !toggleDsc })}>
                                        <Text style={toggleDsc ? styles.videoTxt : styles.videoTxtLong}>
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.videoBox}>
                                <View style={styles.videoPlayer}>
                                    <VideoPlayer
                                        videoProps={{
                                            shouldPlay: false,
                                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                                            source: {
                                                uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                                            },
                                        }}
                                        isPortrait={true}
                                        playFromPositionMillis={0}
                                    />
                                </View>
                                <View style={styles.videoTitle}>
                                    <Text style={styles.videoTitleTxt}>How do you do XYZ ?</Text>
                                    <TouchableOpacity style={styles.shareIcon} onPress={() => { this.openShare() }}>
                                        <Icon name='share' style={styles.share} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.videoContent}>
                                    <TouchableOpacity onPress={() => this.setState({ toggleDsc1: !toggleDsc1 })}>
                                        <Text style={toggleDsc1 ? styles.videoTxt : styles.videoTxtLong}>
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>


                    <View>
                        <View style={styles.videoHeader}>
                            <View style={styles.dateBox}>
                                <View><Text style={styles.dtTxt}>25</Text></View>
                                <View><Text style={styles.dayTxt}>Tue</Text><Text style={styles.dayTxt}>Sept</Text></View>
                            </View>
                        </View>

                        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} style={styles.videoSlider}>
                            <View style={styles.videoBox}>
                                <View style={styles.videoPlayer}>
                                    <VideoPlayer
                                        videoProps={{
                                            shouldPlay: false,
                                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                                            source: {
                                                uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                                            },
                                        }}
                                        isPortrait={true}
                                        playFromPositionMillis={0}
                                    />
                                </View>
                                <View style={styles.videoTitle}>
                                    <Text style={styles.videoTitleTxt}>How do you do XYZ ?</Text>
                                    <TouchableOpacity style={styles.shareIcon} onPress={() => { this.openShare() }}>
                                        <Icon name='share' style={styles.share} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.videoContent}>
                                    <TouchableOpacity onPress={() => this.setState({ toggleDsc2: !toggleDsc2 })}>
                                        <Text style={toggleDsc2 ? styles.videoTxt : styles.videoTxtLong}>
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.videoBox}>
                                <View style={styles.videoPlayer}>
                                    <VideoPlayer
                                        videoProps={{
                                            shouldPlay: false,
                                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                                            source: {
                                                uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                                            },
                                        }}
                                        isPortrait={true}
                                        playFromPositionMillis={0}
                                    />
                                </View>
                                <View style={styles.videoTitle}>
                                    <Text style={styles.videoTitleTxt}>How do you do XYZ ?</Text>
                                    <TouchableOpacity style={styles.shareIcon} onPress={() => { this.openShare() }}>
                                        <Icon name='share' style={styles.share} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.videoContent}>
                                    <TouchableOpacity onPress={() => this.setState({ toggleDsc3: !toggleDsc3 })}>
                                        <Text style={toggleDsc3 ? styles.videoTxt : styles.videoTxtLong}>
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
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
        padding: 10,
        paddingTop: 0,
    },
    videoSlider: {          
           
    },
    videoBox: { 
        alignSelf:'baseline',                
        backgroundColor: Color.white,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 15,
        marginRight: 5,
        elevation: 1,
        width: Dimensions.get('window').width - 20,
    },
    videoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    shareIcon: {
        marginRight: 15,
        backgroundColor: Color.white,
    },
    share: {
        fontSize: 24,
        color: Color.greyIcon,
    },
    dateBox: {
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dtTxt: {
        color: Color.primary,
        fontSize: 42,
        fontWeight: 'bold',
        paddingRight: 10,
    },
    dtTxtSml: {
        fontSize: 26,
    },
    dayTxt: {
        fontSize: 14,
        color: Color.black,
    },
    dayTxtSml: {
        fontSize: 11,
        color: Color.black,
    },
    videoPlayer: {
        width: Dimensions.get('window').width - 40,
    },
    videoContent: {

    },
    videoTitle: {
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    videoTitleTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.primary,
    },
    videoTxt: {
        fontSize: 14,
        color: Color.greyTxt,

    },
    videoTxtLong: {
        height: 35,
        fontSize: 14,
        color: Color.greyTxt,
    },
    seeMore: {
        paddingTop: 5,
        paddingBottom: 10,
        color: Color.primary,
    },
    introImg: {
        height: 200,
        width: null,
    }
});
