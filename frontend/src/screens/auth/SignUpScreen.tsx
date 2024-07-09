import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {validateSignup} from '../../utils';
import CustomButton from '../../components/CustomButton';

interface SignUpScreenProps {}

function SignUpScreen({}: SignUpScreenProps) {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log(signup.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          touched={signup.touched?.email}
          inputMode="email"
          error={signup.errors?.email}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          touched={signup.touched?.password}
          secureTextEntry
          error={signup.errors?.password}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          textContentType="oneTimeCode"
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          touched={signup.touched?.passwordConfirm}
          secureTextEntry
          error={signup.errors?.passwordConfirm}
          returnKeyType="join"
          blurOnSubmit={false}
          textContentType="oneTimeCode"
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        />
        <CustomButton label="회원가입" onPress={handleSubmit} />
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
