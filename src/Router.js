import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Drawer, Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import MainPage from './Pages/MainPage';
import CustomTabBar from './Components/CustomTabBar';
import DestinationPage from './Pages/DestinationPage';
import ItalyPage from './Pages/ItalyPage';
import TurkeyPage from './Pages/TurkeyPage';
import SideBar from './Components/SideBar';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Actions from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginTop: 65 }}>
      <Stack key='root'>
        <Scene key='loginandregister' hideNavBar>
          <Scene key='login' component={LoginPage} />
          <Scene
            key='register'
            component={RegisterPage}
            navTransparent
            hideNavBar={false}
          />

          <Drawer
            key='rightmenu'
            title
            contentComponent={SideBar}
            drawerPosition='right'
            drawerIcon={
              <IonIcon
                name='menu'
                size={height * 0.04}
                style={{
                  color: 'pink',
                }}
              />
            }
            drawerWidth={width / 2 + width * 0.1}
            hideNavBar={false}
            navTransparent
            drawerType='slide'>
            <Tabs tabBarComponent={CustomTabBar}>
              <Scene key='main' component={MainPage} navTransparent />
            </Tabs>
          </Drawer>
        </Scene>
        <Scene key='turkey' component={TurkeyPage} hideNavBar />
        <Scene
          key='destinations'
          component={DestinationPage}
          navTransparent
          hideNavBar></Scene>
        <Scene key='italy' component={ItalyPage} hideNavBar />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
