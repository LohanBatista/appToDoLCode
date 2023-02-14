import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Input} from '~/components/Input';

export const Home: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Input
        placeholder="Qualquer Coisa"
        value={text}
        onChangeText={(text: string) => setText(text)}
      />
      <Text>Hello</Text>
    </View>
  );
};
