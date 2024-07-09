import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {validateSignup} from '../../utils/validate';
import CustomButton from '../../components/CustomButton';

interface SignUpScreenProps {}

function SignUpScreen({}: SignUpScreenProps) {
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          touched={signup.touched?.email}
          inputMode="email"
          error={signup.errors?.email}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          touched={signup.touched?.password}
          secureTextEntry
          error={signup.errors?.password}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          touched={signup.touched?.passwordConfirm}
          secureTextEntry
          error={signup.errors?.passwordConfirm}
          {...signup.getTextInputProps('passwordConfirm')}
        />
        <CustomButton label="회원가입" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignUpScreen;
