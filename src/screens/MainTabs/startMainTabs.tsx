import { Navigation, LayoutBottomTabs, LayoutStack, LayoutComponent } from 'react-native-navigation';

/* individual screen components*/
const zoGridScreen: LayoutComponent = {
    id: '', // Optional, Auto generated if empty
    name: 'lilstar.ZodiacGridScreen',
    options: {}
}

const miscScreen: LayoutComponent = {
    id: '', 
    name: 'lilstar.MiscScreen',
    options: {}
}

/* individual screen stacks*/
const stack1: LayoutStack = {
    children: [
      {
        component: zoGridScreen
      }
    ],
    options: {
        bottomTab: {
          text: 'Zo Tab',
          icon: require("../../assets/icons/yin-yang-32px.png"),
          textColor: "darkgrey",
          selectedTextColor: "black",
          iconInsets: { top: 5, left: 28, bottom: 28, right: 28 },

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
          text: 'Misc Tab',
          icon: require("../../assets/icons/yin-yang-32px.png"),
          textColor: "darkgrey",
          selectedTextColor: "black",
          iconInsets: { top: 5, left: 28, bottom: 28, right: 28 },
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

const startMainTabs = () => {
    Navigation.setRoot({
        root: {
          bottomTabs: myTabs
        }
    });
};

export default startMainTabs;