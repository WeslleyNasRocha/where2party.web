import React from 'react';
import { Formik, Field, Form } from 'formik';
import Yup from 'yup';

const EventsForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={({ titulo, descricao }) => {
      props.submit({ titulo, descricao });
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
              <label htmlFor="data" className="col-sm-2 control-label">
                Data
              </label>
              <div className="col-sm-10">
                <Field
                  name="data"
                  id="data"
                  type="text"
                  className="form-control"
                  placeholder="Endereço"
                />
              </div>
              {touched.data &&
                errors.data && (
                  <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                    <p>{errors.data}</p>
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
