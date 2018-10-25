import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Share } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab } from 'native-base';
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from 'react-native-searchbar';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Color } from '@common';
import Feed from '../Feed/Feed';
import Trending from '../Trending/Trending'

class Index extends React.Component {
    static navigationOptions = ({ navigation }) => ({        
        header: null      
    })

    // constructor(props){
    //     super(props);
    //     Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    // }   


    render() {
        const { navigate } = this.props.navigation
        return (
            <Container style={styles.containerBg}>                
                {/*POPUP MENU Start*/}              

                <View style={styles.headerBg}>                    
                    <View style={styles.appTitle}>
                        <Text style={styles.title}>appna</Text>
                    </View>
                    <View style={styles.userIcon}>                          
                        <Button transparent>
                            <Icon style={styles.personIcon} name='person' />
                        </Button>
                    </View>                                        
                </View>

                <Tabs tabBarBackgroundColor={'#20C0E2'} renderTabBar={() => <ScrollableTab />}>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary, }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Home">
                        <Text>Home</Text>
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary, }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Trending">
                        <View>
                            <Trending />
                        </View>
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary, }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Feed">
                        <View>
                            <Feed />
                        </View>
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary, }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Sponsored">
                        <Text>Sponsored</Text>
                    </Tab>                                        
                </Tabs>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    containerBg:{
        backgroundColor:Color.innerBg,
    },
    headerBg: {
        backgroundColor: Color.primary,
        alignItems: 'center',
        paddingTop:25,        
        flexDirection:'row',        
    },
    appTitle:{      
        flex:1,
    },
    userIcon:{
       position:'absolute',
        top:25,
        right:5,        
        zIndex:9,
    },
    personIcon:{
        fontSize:26,
        color:Color.white,
    },
    topBar: {
        flexDirection: 'row',
        paddingBottom: 10,
        alignItems: 'center',
    },
    title: {
        fontSize:32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center',
    },
    label: {

    },
    buttonContainer: {
        backgroundColor: '#008E3C',
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectText: {
        color: '#fff'
    },
    tabBg: {
        backgroundColor: Color.primary,
    },
    rightMenuIcon: {
        fontSize: 18,
        width: 50,
    },
    
});

export default Index
