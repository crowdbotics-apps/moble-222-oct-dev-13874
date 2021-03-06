import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen013022Navigator from '../features/CopyOfBlankScreen013022/navigator';
import BlankScreen113019Navigator from '../features/BlankScreen113019/navigator';
import BlankScreen013017Navigator from '../features/BlankScreen013017/navigator';

/**
 * new navigators can be cvbxfgxbv imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen013022: { screen: CopyOfBlankScreen013022Navigator },
BlankScreen113019: { screen: BlankScreen113019Navigator },
BlankScreen013017: { screen: BlankScreen013017Navigator },

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
