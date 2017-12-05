import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-bootstrap-date-picker';
import Yup from 'yup';

class EventsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="box-body">
          <Formik
            initialValues={{ email: '', password: '', data: moment().toISOString() }}
            onSubmit={(values) => {
              // this.props.submit({ titulo, descricao });
              console.log(values);
            }}
            // validationSchema={Yup.object().shape({
            //   titulo: Yup.string()
            //     .min(5)
            //     .required(),
            //   description: Yup.string()
            //     .min(10)
            //     .max(250),
            // })}
            render={({
 touched, errors, handleChange, values, setFieldValue,
}) => {
              console.log(errors);
              return (
                <Form>
                  <div className="form-group">
                    <label htmlFor="titulo" className="col-sm-2 control-label">
                      Titulo
                    </label>

                    <div className="col-sm-10">
                      <Field
                        type="Text"
                        name="titulo"
                        className="form-control"
                        id="titulo"
                        placeholder="Titulo"
                      />
                    </div>
                    {touched.titulo &&
                      errors.titulo && (
                        <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                          <p>{errors.titulo}</p>
                        </div>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="descricao" className="col-sm-2 control-label">
                      Descrição
                    </label>
                    <div className="col-sm-10">
                      <Field
                        name="descricao"
                        id="descricao"
                        type="text"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>
                    {touched.descricao &&
                      errors.descricao && (
                        <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                          <p>{errors.descricao}</p>
                        </div>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="col-sm-2 control-label">
                      Endereço
                    </label>
                    <div className="col-sm-10">
                      <Field
                        name="address"
                        id="address"
                        type="text"
                        className="form-control"
                        placeholder="Endereço"
                      />
                    </div>
                    {touched.address &&
                      errors.address && (
                        <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                          <p>{errors.address}</p>
                        </div>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="col-sm-2 control-label">
                      Data
                    </label>
                    <div className="col-sm-10">
                      <DatePicker
                        name="data"
                        dateFormat="DD/MM/YYYY"
                        value={values.data}
                        onChange={(value) => {
                          setFieldValue('data', value);
                        }}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-info btn-block">
                    save
                  </button>
                </Form>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default EventsForm;
