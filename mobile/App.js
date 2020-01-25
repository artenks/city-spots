import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MapView from 'react-native-maps'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{flex: 1}}>

        <MapView style={{flex: 1}}
          initialRegion={{
            latitude: -6.970255,
            longitude: -35.7902484,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        />

      </SafeAreaView>
    </>
  );
};

export default App;
