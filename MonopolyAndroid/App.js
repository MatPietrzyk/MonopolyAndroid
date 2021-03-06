import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Game from './source/components/Game';
import Options from './source/components/Options';
import Menu from './source/components/Menu';

const MainNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Options: {screen: Options},
  Game: {screen: Game}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const App = createAppContainer(MainNavigator);

export default App;
