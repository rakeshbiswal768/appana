import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';

import Index from '../Index/index'
import Login from '../Login/login'
import ForgotPass from '../ForgotPass/forgotpass'
import Signup from '../Signup/signup'
import Intro from '../Intro/Intro'
import Feed from '../Feed/Feed'


const MainNavigator = StackNavigator({
    
    Intro: { screen: Intro },
    Index: { screen: Index },  
    Feed: { screen: Feed }, 
    // Login: { screen: Login },     
    // ForgotPass: { screen: ForgotPass },
    // Signup: { screen: Signup },
          
    
}, {
})

export default MainNavigator;