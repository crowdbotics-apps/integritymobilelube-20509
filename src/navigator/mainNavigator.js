import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps104714Navigator from '../features/Maps104714/navigator';
import Add-Item104713Navigator from '../features/Add-Item104713/navigator';
import Maps104709Navigator from '../features/Maps104709/navigator';
import UserProfile104705Navigator from '../features/UserProfile104705/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps104714: { screen: Maps104714Navigator },
Add-Item104713: { screen: Add-Item104713Navigator },
Maps104709: { screen: Maps104709Navigator },
UserProfile104705: { screen: UserProfile104705Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
