import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { View, Text, Button, StyleSheet } from 'react-native';

export const LocationComponent = ({ onLocationCaptured }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permiso de ubicación denegado');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      onLocationCaptured(loc.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <Text>Ubicación: {location.coords.latitude}, {location.coords.longitude}</Text>
      ) : (
        <Text>Obteniendo ubicación...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
