import Location from 'react-native-location';

Location.configure({
  distanceFilter: 5,
  desiredAccuracy: {
    ios: 'best',
    android: 'balancedPowerAccuracy',
  },
});

export const {
  requestPermission,
  subscribeToLocationUpdates: onCurrentLocationUpdate,
} = Location;
