import { Navigation, LayoutBottomTabs, LayoutStack, LayoutComponent } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenID from '../ScreenID';

const startMainTabs = () => {
  Promise.all([
      Icon.getImageSource("theme-light-dark", 30, "grey"),
      Icon.getImageSource("theme-light-dark", 33, "grey"),
      Icon.getImageSource("yin-yang", 30, "grey"),
      Icon.getImageSource("yin-yang", 33, "grey")
  ]).then(sources => {
    /* screen components*/
    const zoGridScreen: LayoutComponent = {
      id: ScreenID.ZodiacGridScreen,
      name: ScreenID.ZodiacGridScreen,
      options: {}
    }

    const miscScreen: LayoutComponent = {
      id: ScreenID.MiscScreen,
      name: ScreenID.MiscScreen,
      options: {}
    }

    /* screen stacks*/
    const stack1: LayoutStack = {
      children: [
        {
          component: zoGridScreen
        }
      ],
      options: {
          bottomTab: {
            text: 'Horoscopes',
            icon: sources[0],
            selectedIcon: sources[1],
            textColor: "darkgrey",
            selectedIconColor: "black",
            selectedTextColor: "black",
            //iconInsets: { top: 5, left: 28, bottom: 28, right: 28 },
          },
          topBar: { // hide top navigation bar && allow drawing behind (more screen space)
              visible: false,
              drawBehind: true
          }
      }
    }
    const stack2: LayoutStack = {
      children: [
        {
          component: miscScreen
        }
      ],
      options: {
          bottomTab: {
            text: 'Taoism',
            icon: sources[2],
            selectedIcon: sources[3],
            textColor: "darkgrey",
            selectedIconColor: "black",
            selectedTextColor: "black",
          },
          topBar: {
              visible: false,
              drawBehind: true
          },
          bottomTabs: {
            animate: false
          }
      }
    } 

    /* the tabs */
    const myTabs: LayoutBottomTabs = {
      children: [
        {
          stack: stack1
        },
        {
          stack: stack2
        }
      ],
      options: {}
    } 

    /* start app */   
    Navigation.setRoot({
        root: {
          bottomTabs: myTabs
        }
    });
  })       
}


export default startMainTabs;