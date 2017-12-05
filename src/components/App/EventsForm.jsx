import React from 'react';
import { Formik, Field, Form } from 'formik';
import Yup from 'yup';

const EventsForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={({ titulo, description }) => {
      props.submit({ titulo, description });
    }}
    validationSchema={Yup.object().shape({
      titulo: Yup.string()
        .min(5)
        .required(),
      description: Yup.string()
        .min(10)
        .max(250),
    })}
    render={({ touched, errors }) => {
      console.log(errors);
      return (
        <Form>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="Titulo" className="col-sm-2 control-label">
                Titulo
              </label>

              <div className="col-sm-10">
                <Field
                  type="Text"
                  name="titulo"
                  className="form-control"
                  id="Titulo"
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
              <label htmlFor="description" className="col-sm-2 control-label">
                Descrição
              </label>
              <div className="col-sm-10">
                <Field
                  name="description"
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                />
              </div>
              {touched.description &&
                errors.description && (
                  <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                    <p>{errors.description}</p>
                  </div>
                )}
            </div>

            <div className="box-footer">
              <button type="submit" className="btn btn-info btn-block">
                save
              </button>
            </div>
          </div>
        </Form>
      );
    }}
  />
);

export default EventsForm;
