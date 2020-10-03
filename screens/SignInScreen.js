import * as Yup from "yup";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Form from "../Form";
import { firebase } from "../firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), ''],
    "Confirmation password must match password"
  )
});

const SignInScreen = ({ navigation }) => {
  const [signInError, setSignInError] = useState("");

  async function handleOnSubmit(values) {
    const { email, password, confirm } = values;
    if (values.confirm != "") {
      console.log("create user");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          setSignInError(error.message);
        });
        alert("profile created!")
    } else {
      console.log("sign in user");
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          setSignInError(error.message);
        });
        alert("signed in!")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            email: '',
            password: '',
            confirm: '' 
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="confirm"
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"

          />

          <Form.Button
            title={(values) => (values.confirm == "" ? "Log in" : "Sign up")}
          />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple"
  },
  formContainer: {
    width: "60%"
  }
});

export default SignInScreen;
