import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions/auth';

import logo from '../../assets/images/logo.png';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href="#">
              <img src={logo} className="logo" alt="logo" />
            </a>
          </div>
          <div className="login-box-body">
            {/* <p className="login-box-msg">Sign in to start your session</p> */}
            <p className="login-box-msg">
              Logue-se em nosso sistema para gerenciar os seus eventos
            </p>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, actions) => {
                const { email, password } = values;
                this.props.dispatch(login({ email, password }));
                this.props.history.push('/');
              }}
              // validationSchema={Yup.object().shape({
              //   email: Yup.string()
              //     .email('Por favor, insira um email valido')
              //     .required('Email é um campo requerido'),
              //   password: Yup.string()
              //     .min(6, 'A senha deve ser de no mínimo, 6 caracteres')
              //     .required('Senha é um campo requerido')
              // })}
              render={({ touched, errors }) => (
                <Form>
                  {/* <Form onSubmit={handleSubmit}> */}
                  <div className="form-group has-feedback">
                    <Field
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                    <span className="glyphicon glyphicon-envelope form-control-feedback" />
                    {touched.email &&
                      errors.email && (
                        <div
                          style={{ marginTop: 10 }}
                          className="alert alert-danger"
                          role="alert"
                        >
                          <p>{errors.email}</p>
                        </div>
                      )}
                  </div>
                  <div className="form-group has-feedback">
                    <Field
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                    {touched.password &&
                      errors.password && (
                        <div
                          style={{ marginTop: 10 }}
                          className="alert alert-danger"
                          role="alert"
                        >
                          <p>{errors.password}</p>
                        </div>
                      )}
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-flat"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            />

            <br />
            <a href="#" className="text-center">
              Register a new membership
            </a>
          </div>
          {/* <!-- /.login-box-body --> */}
        </div>
      </div>
    );
  }
}

// const FormikApp = withFormik({
//   mapPropsToValues(props) {
//     console.log(props);
//     return {
//       email: '',
//       password: '',
//       from: props.location || { pathname: '/' }
//     };
//   },
//   // validationSchema: Yup.object().shape({
//   //   email: Yup.string()
//   //     .email('Por favor, insira um email valido')
//   //     .required('Email é um campo requerido'),
//   //   password: Yup.string()
//   //     .min(6, 'A senha deve ser de no mínimo, 6 caracteres')
//   //     .required('Senha é um campo requerido')
//   // }),
//   handleSubmit(values) {
//     console.log(values);
//   }
// })(LoginPage);

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(LoginPage);
