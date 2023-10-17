import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export const Select = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Picker
      style={{ width: '100%', height: 200, backgroundColor: 'yellow' }}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      dropdownIconColor="red">
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};
