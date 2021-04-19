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
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}>
          
        <View style={styles.root}>
          <View style={styles.inforContainer}>
            <Text style={styles.logo}>Scopic</Text>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.textEmail}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email here"
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={false}
              //onSubmitEditing={() => this.refs.txtPasswordRef.focus()}
            />
            <View style={styles.divider} />
            <Text style={styles.textPass}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password here"
              returnKeyType="go"
              secureTextEntry={true}
              autoCorrect={false}
              //ref={txtPasswordRef}
            />
            <View style={styles.divider} />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnSignIn}>
              <Text style={styles.btnTextSignIn}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer2}>
            <Text style={styles.btnTextSignUp}>Sign Up</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    //flexDirection: 'column',
  },
  container:{
    flex:1,
  },
  inforContainer: {
    backgroundColor: 'blue',
  },
  btnContainer: {
    flex: 1,
    backgroundColor: 'green',
    paddingVertical: 40,
  },
  btnContainer2: {
    flex:1,
    backgroundColor: 'black',
  },
  logo: {
    color: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 100,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40,
    marginLeft: 30,
  },
  textEmail: {
    marginHorizontal: 30,
    marginTop: 40,
  },
  textPass: {
    marginHorizontal: 30,
    marginTop: 25,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 30,
  },
  textInput: {
    height: 40,
    marginHorizontal: 30,
  },
  btnSignIn: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    marginHorizontal: 40,
  },
  btnTextSignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  btnTextSignUp: {
    alignSelf: 'flex-end',
    paddingHorizontal: 50,
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default LoginLayout;
