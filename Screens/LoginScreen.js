import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Please enter your email address'),
    password: Yup.string()
        .required('Please enter your password.'),
});

const LoginScreen = ({ navigation }) => {
    return (

        <Formik initialValues={{
            email: "",
            password: ""
        }}
            validationSchema={LoginSchema}
        >

            {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (

                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <Image
                        style={styles.img}
                        source={require('../assets/img.jpg')}
                    />
                    <Text style={styles.login}>Login</Text>

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
                            secureTextEntry={true}
                            autoCapitalize={'none'}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
                        />
                        <TouchableOpacity onPress={() => { }} style={{ paddingTop: 5, paddingLeft: 150 }}>
                            <Text style={{ color: "#283593", fontWeight: "400", fontSize: 12, }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    )}

                    <TouchableOpacity onPress={() => { }}
                        disabled={!isValid}
                        style={[styles.button, { backgroundColor: isValid ? '#283593' : '#9FA8DA' }]}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.loginwith}>Or, login with...</Text>

                    <View style={styles.iconview}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assets/facebook.png')} style={styles.imgicon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assets/google.png')} style={styles.imgicon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assets/twtter.png')} style={styles.imgicon} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                        <Text>New to the App?</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ color: "#283593" }}>Register</Text>
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
        marginTop: 40,
        height: 300,
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
        tintColor: "#283593",
        marginTop: 5,
        marginTop: 15,
    },
    userView: {
        flexDirection: "row",
        borderBottomColor: "#3F51B5",
        borderBottomWidth: 1,
        paddingTop: 50,
        marginHorizontal: 30
    },
    errorText: {
        color: "#880E4F",
        fontSize: 12,
        marginLeft: 40,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
        marginHorizontal: 20,
        marginTop: 40

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
        paddingTop: 25,
        marginHorizontal: 10
    },
})

export default LoginScreen