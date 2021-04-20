import React, {useRef} from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  onChange,
  form,
} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

const LoginLayout = () => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  //const txtPasswordRef = useRef(null)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}
      /> */}
        {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}> */}
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>Scopic</Text>
            </View>
            <View style={styles.inforContainer}>
              <Text style={styles.txtTitle}>Sign In</Text>
              <Text style={styles.txtEmail}>Email</Text>
              <TextInput
                style={styles.txtInput}
                placeholder="Enter your email here"
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
                //onSubmitEditing={() => this.refs.txtPasswordRef.focus()}
              />
              <View style={styles.divider} />
              <Text style={styles.txtPassword}>Password</Text>
              <TextInput
                style={styles.txtInput}
                placeholder="Enter your password here"
                returnKeyType="go"
                autoCorrect={false}
                secureTextEntry={isSecureEntry}
                icon={
                  <TouchableOpacity
                    onPress={() => {
                      setIsSecureEntry(prev => !prev);
                    }}>
                    <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                  </TouchableOpacity>
                }
                iconPosition="right"
                // onChangeText={(value)} => {}
                //ref={txtPasswordRef}
              />
              <View style={styles.divider} />
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnSignIn}>
                  <Text style={styles.btnTextSignIn}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnContainer2}>
                <Text style={styles.btnTextSignUp}>Sign Up</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    //backgroundColor: 'brown',
    height: 130,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  logo: {
    color: 'red',
    fontSize: 25,
    fontWeight: '800',
    alignSelf: 'center',
  },
  inforContainer: {
    //backgroundColor:'red',
    marginHorizontal: 30,
    //backgroundColor: 'green',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
  txtEmail: {},
  txtPassword: {},
  txtInput: {
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  btnContainer: {
    //backgroundColor: 'blue',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  btnSignIn: {
    height: 48,
    backgroundColor: 'red',
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  btnTextSignIn: {
    alignSelf: 'center',
    marginVertical: 12,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  btnContainer2: {
    //backgroundColor: 'yellow',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  btnTextSignUp: {
    marginHorizontal: 20,
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginTop: 160,
  },
});

export default LoginLayout;
