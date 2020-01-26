import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {requestPermission, onCurrentLocationUpdate} from '~/libs/location';

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    let unsubscribe = null;

    requestPermission({
      android: {
        detail: 'fine',
      },
    }).then(granted => {
      if (granted) {
        unsubscribe = onCurrentLocationUpdate(locations => {
          const {longitude, latitude} = locations[0];

          setCurrentLocation({
            longitude,
            latitude,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
          });
        });
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleRegionChange = region => {
    setCurrentLocation(region);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          initialRegion={currentLocation}
          onRegionChange={handleRegionChange}>
          {currentLocation && (
            <Marker coordinate={currentLocation}>
              <Text>Opa</Text>
            </Marker>
          )}
        </MapView>
      </SafeAreaView>
    </>
  );
};

export default App;
