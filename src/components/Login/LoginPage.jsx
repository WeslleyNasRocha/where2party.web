import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { Icon } from 'react-icons-kit';
import { mail, key } from 'react-icons-kit/icomoon';

import { startLogin } from '../../actions/auth';

import logo from '../../assets/images/logo.png';

const LoginPage = props => (
  <div className="login-page">
    <div className="login-box">
      <div className="login-logo">
        <a href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <div className="login-box-body">
        {/* <p className="login-box-msg">Sign in to start your session</p> */}
        <p className="login-box-msg">Logue-se em nosso sistema para gerenciar os seus eventos</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            const { email, password } = values;
            props.startLogin(email, password);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Por favor, insira um email valido')
              .required('Email é um campo requerido'),
            password: Yup.string()
              .min(6, 'A senha deve ser de no mínimo, 6 caracteres')
              .required('Senha é um campo requerido'),
          })}
          render={({ touched, errors }) => (
            <Form>
              {/* <Form onSubmit={handleSubmit}> */}
              <div className="form-group">
                <div className="input-group">
                  <Field type="email" className="form-control" name="email" placeholder="Email" />
                  {/* <span className="glyphicon glyphicon-envelope form-control-feedback" /> */}
                  <span className="input-group-addon">
                    <Icon icon={mail} />
                  </span>
                </div>
                {touched.email &&
                  errors.email && (
                    <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                      <p>{errors.email}</p>
                    </div>
                  )}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <Field
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                  />
                  <span className="input-group-addon">
                    <Icon icon={key} />
                  </span>
                </div>
                {/* <span className="glyphicon glyphicon-lock form-control-feedback" /> */}

                {touched.password &&
                  errors.password && (
                    <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                      <p>{errors.password}</p>
                    </div>
                  )}
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">
                    Log In
                  </button>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
      {/* <!-- /.login-box-body --> */}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: (email, password) => dispatch(startLogin(email, password)),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
