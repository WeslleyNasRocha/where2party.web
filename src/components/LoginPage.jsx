import React, { Component } from 'react';
// import { LoginPage } from 'reactjs-admin-lte';
import firebase from 'firebase';
import { toast } from 'react-toastify';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

import logo from '../assets/images/logo.png';

const LoginPage = ({ handleSubmit, errors }) => {
  if (errors) {
    console.log(errors);
  }
  return (
    <div>
      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <img src={logo} className="logo" alt="logo" />
            <p>
              <i>
                <b>Where</b>
              </i>
              2
              <i>
                <b>Party</b>
              </i>
            </p>
          </a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <Form onSubmit={handleSubmit}>
            <div className="form-group has-feedback">
              <Field type="email" className="form-control" name="email" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <Field
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button type="submit" className="btn btn-primary btn-block btn-flat">
                  Log In
                </button>
              </div>
            </div>
          </Form>
          <br />
          <a href="#" className="text-center">
            Register a new membership
          </a>
        </div>
        {/* <!-- /.login-box-body --> */}
      </div>
    </div>
  );
};
const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Por favor, insira um email valido')
      .required('Email é um campo requerido'),
    password: Yup.string()
      .min(6, 'A senha deve ser de no mínimo, 6 caracteres')
      .required('Senha é um campo requerido'),
  }),
  handleSubmit(values) {
    const { email, password } = values;
    console.log(email, password);
    firebase
      .app()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((snapshot) => {
        console.log(snapshot);
        toast.success('logged');
      })
      .catch((error) => {
        toast.error(error.message, { position: toast.POSITION.TOP_CENTER });
        console.log(error);
      });
  },
})(LoginPage);

export default FormikApp;
