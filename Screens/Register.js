import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(8, 'To Long!')
    .required('Please enter your password.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 6 characters, at least one uppercase, one lowercase, one spwcial character '),
  confirmPassword: Yup.string()
    .min(6)
    .oneOf([Yup.ref('password')], 'Your password do not match.')
    .required('please comfirm password'),
  mobile: Yup.string()
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .matches(/^[0-9]+$/, 'number is not valid.')
    .required('Please enter your number'),
});

const Register = ({ navigation }) => { 

  const [useData, setUserData] = useState({})
  const { register } = useContext(AuthContext)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '118717737045-iohp1au8htj7n6nrcqlopgj7vj7cr8vb.apps.googleusercontent.com',
    });
  }, [])

  const googleSignIn = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const [hidePassword, setHidePassword] = useState()

  return (

    <Formik initialValues={{
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }}
      validationSchema={RegisterSchema}
    >

      {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (

        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <Image
            style={styles.img}
            source={require('../assets/img.jpg')}
          />
          <Text style={styles.login}>Register</Text>

          <View style={styles.iconview}>
            <TouchableOpacity onPress={() => { }}>
              <Image source={require('../assets/facebook.png')} style={styles.imgicon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => googleSignIn().then(res => {
              console.log(res.user); setUserData(res.user)
            }).catch(error => console.log(error))}>
              <Image source={require('../assets/google.png')} style={styles.imgicon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Image source={require('../assets/twtter.png')} style={styles.imgicon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.loginwith}>Or, Register with Email</Text>

          <View style={styles.userView}>
            <Image
              style={styles.icon}
              source={require('../assets/user.png')}
            />
            <TextInput
              placeholder='Your Name'
              value={values.name}
              autoCapitalize={'none'}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />
          </View>
          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}
          <View style={styles.userView}>
            <Image
              style={styles.icon}
              source={require('../assets/email.png')}
            />
            <TextInput
              placeholder='Email ID'
              keyboardType='email-address'
              autoCapitalize={'none'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
          </View>
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <View style={styles.userView}>
            <Image
              style={styles.icon}
              source={require('../assets/padlock.png')}
            />
            <TextInput
              placeholder='Password'
              secureTextEntry={hidePassword}
              autoCapitalize={'none'}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} >
            <Image
              style={styles.iconeye1}
              source={hidePassword ? require('../assets/hide.png') : require('../assets/view.png')}
            />
            </TouchableOpacity>
          </View>
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <View style={styles.userView}>
            <Image
              style={styles.icon}
              source={require('../assets/padlock.png')}
            />
            <TextInput
              placeholder='Confirm Password'
              secureTextEntry={hidePassword}
              autoCapitalize={'none'}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} >
              <Image
                style={styles.iconeye}
                source={hidePassword ? require('../assets/hide.png') : require('../assets/view.png')}
              />
            </TouchableOpacity>
          </View>
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}

          <View style={styles.userView}>
            <Image
              style={styles.icon}
              source={require('../assets/phone.png')}
            />
            <TextInput
              placeholder='Mobile No'
              keyboardType='phone-pad'
              value={values.mobile}
              onChangeText={handleChange('mobile')}
              onBlur={() => setFieldTouched('mobile')}
            />
          </View>
          {touched.mobile && errors.mobile && (
            <Text style={styles.errorText}>{errors.mobile}</Text>
          )}



          <TouchableOpacity onPress={() => register(values.email, values.password)}
            disabled={isValid}
            style={[styles.button, { backgroundColor: isValid ? '#283593' : '#9FA8DA' },]}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Text>Already reginstered?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={{ color: "#283593" }}>Login</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  img: {
    marginTop: 30,
    height: 200,
    width: 300,
    alignSelf: "center"
  },
  login: {
    fontSize: 30,
    fontVariant: ['small-caps'],
    color: "#5C6BC0",
    paddingLeft: 50,
    fontWeight: "500"
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginTop: 15,
    tintColor: "#283593"
  },
  iconeye: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginTop: 15,
    tintColor: "#283593",
    marginLeft: 165
  },
  iconeye1: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginTop: 15,
    tintColor: "#283593",
    marginLeft: 220
  },
  errorText: {
    color: "#880E4F",
    fontSize: 12,
    marginLeft: 40,
  },
  userView: {
    flexDirection: "row",
    borderBottomColor: "#3F51B5",
    borderBottomWidth: 1,
    paddingTop: 40,
    marginHorizontal: 30
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 30

  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#fff"
  },
  loginwith: {
    textAlign: "center",
    color: "#666",
  },
  imgicon: {
    width: 70,
    height: 70,
    marginHorizontal: 30
  },
  iconview: {
    flexDirection: "row",
    paddingTop: 10,
    marginHorizontal: 10
  },
})


export default Register