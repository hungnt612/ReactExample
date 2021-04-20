import React, {useRef} from 'react';
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
} from 'react-native';

const LoginLayout = () => {
  //const txtPasswordRef = useRef(null)
  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}
      /> */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}>
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
              secureTextEntry={true}
              autoCorrect={false}
              //ref={txtPasswordRef}
            />
            <View style={styles.divider} />
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnSignIn}>
                <Text style={styles.btnTextSignIn}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.btnTextSignUp}>Sign Up</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  btnTextSignUp: {
    marginHorizontal: 20,
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 300,
    alignSelf: 'flex-end',
  },
});

export default LoginLayout;
