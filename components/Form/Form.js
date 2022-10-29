import React, { useEffect, useCallback } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useForm } from 'react-hook-form';

const InscriptionScreen = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {
    console.log(formData);
  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <View>
      <TextInput style={{color:'#fff'}}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField('email')}
      />
      <TextInput style={{color:'#fff'}} 
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField('password')}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default InscriptionScreen;