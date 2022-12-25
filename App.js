import React from 'react';
import {View , Text ,StyleSheet} from 'react-native';
import CounterNumber from './src/CounterNumber';

const App = () => {
  return (
    <View >
      <CounterNumber/>
    </View>
  );
}

//////// export the component to make it available to other parts of the app/////////////////////
export default App;