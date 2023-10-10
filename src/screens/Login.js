import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';
import 'firebase/firestore';

const Login = () => {
  const [mobile, setMobile] = useState([]);
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState('');

  const navigation = useNavigation()

  const handleOTPVerification = async () => {
    if (!confirm) {
      console.log('Confirm is null');
      return;
    }
    return;
  };

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+91' + mobile);
      console.log("confirm:::", confirmation);
      setConfirm(confirmation);
      handleOTPVerification();

    } catch (error) {
      console.log('log in error', error.message);
    }
  };

  const verifyCode = async () => {
    try {
      const res = await confirm.confirm(otp);
      console.log(res);
      navigation.navigate('Home')
    } catch (error) {
      console.log('Invalid code.');
    }
  };
  return (
    <>
      <View style={style.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={style.divider}>
          <Text style={style.dividerText}>Login</Text>
        </View>
        {confirm == null ? (
          <View>
            <TextInput
              placeholder="Moblie Number"
              style={style.mobile}
              keyboardType={'numeric'}
              value={mobile}
              onChangeText={text => {
                setMobile(text);
              }}
            />
            <TouchableOpacity
              style={style.login}
              onPress={() => {
                signInWithPhoneNumber();
              }}>
              <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <OTPInputView
              style={{width: '80%', height: 200, alignSelf: 'center'}}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={style.underlineStyleBase}
              codeInputHighlightStyle={style.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
                setOtp(code);
              }}
            />
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                verifyCode();
              }}>
              <Text style={style.buttonText}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    height: 40,
  },
  image: {
    top: -159,
    width: 390,
    height: 270,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  text: {
    fontSize: 28,
    marginTop: 250,
    fontWeight: '800',
    color: 'black',
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    top: -100,
  },
  divider: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: -100,
  },
  dividerText: {
    fontSize: 22,
    color: 'black',
  },
  dividerView: {
    height: 1,
    backgroundColor: 'black',
    width: '22%',
    opacity: 0.6,
  },
  mobile: {
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    borderColor: 'black',
    marginTop: 30,
    width: '87%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
    top: -100,
  },
  login: {
    backgroundColor: '#E23744',
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: -100,
  },
  button: {
    backgroundColor: '#E23744',
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: -100,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  underlineStyleBase: {
    marginTop: -130,
    width: 30,
    height: 40,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
    color: 'black',
  },
});

export default Login;
