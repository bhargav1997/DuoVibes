import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onResendCodePressed = () => {
    console.warn('Press');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton onPress={onConfirmPressed} text={'Confirm'} />

        <CustomButton
          onPress={onResendCodePressed}
          text={'Resend Code'}
          type="SECONDARY"
        />

        <CustomButton
          onPress={onSignInPressed}
          text={'Back to Sign in'}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
