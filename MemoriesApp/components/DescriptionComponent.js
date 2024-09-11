import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export const DescriptionComponent = ({ onDescriptionAdded }) => {
  const [description, setDescription] = useState('');

  const handleSaveDescription = () => {
    onDescriptionAdded(description);
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Agrega una descripción"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Guardar descripción" onPress={handleSaveDescription} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});
