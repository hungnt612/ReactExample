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

const HomeLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} />
    </SafeAreaView>
  );
};

export default HomeLayout;
