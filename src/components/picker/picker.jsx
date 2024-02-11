import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export const Select = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Picker
      style={styles.pickerStyle}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      dropdownIconColor="red">
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    backgroundColor: 'yellow',
    height: 200,
    width: '100%',
  },
});
