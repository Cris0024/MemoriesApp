import React, { useState } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CameraComponent } from './components/CameraComponent';
import { DescriptionComponent } from './components/DescriptionComponent';
import { LocationComponent } from './components/LocationComponent';
import { StorageComponent } from './components/StorageComponent';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [media, setMedia] = useState([]);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);

  const handleMediaCaptured = (uri, type) => {
    setMedia((prev) => [...prev, { id: uri, type, uri }]);
  };

  const handleDescriptionAdded = (desc) => {
    setDescription(desc);
  };

  const handleLocationCaptured = (coords) => {
    setLocation(coords);
  };

  const handleSave = () => {
    const newItem = {
      id: `${media.length + 1}`,
      description,
      location,
    };
    setMedia((prev) => [...prev, newItem]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Camera"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialIcons name="camera" color={color} size={size} />,
          }}
        >
          {() => (
            <>
              <CameraComponent onMediaCaptured={handleMediaCaptured} />
              <DescriptionComponent onDescriptionAdded={handleDescriptionAdded} />
              <LocationComponent onLocationCaptured={handleLocationCaptured} />
              <Button title="Guardar" onPress={handleSave} />
            </>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Media"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialIcons name="storage" color={color} size={size} />,
          }}
        >
          {() => <StorageComponent savedItems={media} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
