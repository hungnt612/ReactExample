import {StyleSheet} from 'react-native';
// import colors from '../../../assets/theme/colors';
export default StyleSheet.create({
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
    color: 'gray',
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
