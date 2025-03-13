import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button, TextInput, View, Text , StyleSheet} from 'react-native';

export default function Form() {


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

  return (
    <View>
      <Text style={styles.header}>Form</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {setEmail(values.email)
            setPassword(values.password)}
        }
        validate={(values) => {
          const errors: { email?: string; password?: string } = {}; // Type definition for errors

          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
          }

          return errors;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')} // Marks the field as touched
              value={values.email}
              placeholder="Email"
              style={styles.Input}
            />
            {errors.email && touched.email && <Text style={styles.Error}>{errors.email}</Text>}

            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')} // Marks the field as touched
              value={values.password}
              placeholder="Password"
              secureTextEntry
              style={styles.Input}
            />
            {errors.password && touched.password && <Text style={styles.Error}>{errors.password}</Text>}

            {/* Wrap handleSubmit in an arrow function */}
            <View style={styles.Button}><Button onPress={() => handleSubmit()} title="Submit" /></View>
          </View>
        )}
      </Formik>
      <View><Text>Email : {email}</Text></View>
      <View><Text>Password : {password}</Text></View>
    </View>
  );
}

const styles=StyleSheet.create({
    header:{
        fontSize:20,
        fontWeight:"bold",
        marginHorizontal:10
    },
    Input:{
        padding:10,
        margin:10,
        color:"black",
        backgroundColor:"#F6F0F0",
        elevation:2,
        borderRadius:5,

    },
    Error:{
        color:"red",
    },
    Button:{
        margin:15,
    }
})
