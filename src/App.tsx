import {
  StatusBar,
  View,
} from 'react-native';
import { CalculatorScreen } from './modules/calculator/screens/calculator';

function App() {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
