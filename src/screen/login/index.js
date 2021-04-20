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
import styles from './styles';

const LoginLayout = () => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  //const txtPasswordRef = useRef(null)
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : null}
    //   style={{flex: 1}}>
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'height'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}>
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
                onPress={() => this.props.navigation.navigate('Home')}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginLayout;
