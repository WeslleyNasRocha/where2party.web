import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import 'react-datepicker/dist/react-datepicker.css';

import Yup from 'yup';

export const EventsForm = props => (
  <div>
    <div className="box-body">
      <Formik
        initialValues={{
          Titulo: '',
          Descricao: '',
          Address: '',
          Data: moment().format('DD/MM/YY'),
          Local: {},
        }}
        onSubmit={(values) => {
          let submitValues = values;

          geocodeByAddress(values.Address)
            .then(results => getLatLng(results[0]))
            .then((latLng) => {
              submitValues = {
                ...submitValues,
                Local: {
                  latitude: latLng.lat,
                  longitude: latLng.lng,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.012,
                },
              };
              // console.log(submitValues);
              props.submit(submitValues);
            })
            .catch(error => toast.error(error));
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
 touched, errors, values, setFieldValue, setTouched,
}) => (
  <Form>
    <div className="form-group">
      <label htmlFor="Titulo" className="col-sm-2 control-label">
                Titulo
      </label>

      <div className="col-sm-10">
        <Field
          type="Text"
          name="Titulo"
          className="form-control"
          id="Titulo"
          placeholder="Titulo"
        />
      </div>
      {touched.Titulo &&
                errors.Titulo && (
                  <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                    <p>{errors.Titulo}</p>
                  </div>
                )}
    </div>
    <div className="form-group">
      <label htmlFor="Descricao" className="col-sm-2 control-label">
                Descrição
      </label>
      <div className="col-sm-10">
        <Field
          name="Descricao"
          id="Descricao"
          type="text"
          className="form-control"
          placeholder="Descrição"
        />
      </div>
      {touched.Descricao &&
                errors.Descricao && (
                  <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                    <p>{errors.Descricao}</p>
                  </div>
                )}
    </div>
    <div className="form-group">
      <label htmlFor="Data" className="col-sm-2 control-label">
                Data
      </label>
      <div className="col-sm-10">
        <DatePicker
          name="Data"
          dateFormat="DD/MM/YYYY"
          value={values.Data}
          onChange={(value) => {
                    setTouched('Data', true);
                    setFieldValue('Data', value.format('DD/MM/YY'));
                  }}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="Address" className="col-sm-2 control-label">
                Endereço
      </label>
      <div className="col-sm-10">
        <PlacesAutocomplete
          inputProps={{
                    value: values.Address,
                    onChange: address => setFieldValue('Address', address),
                  }}
          style={{
                    autocompleteContainer: {
                      position: 'absolute',
                      top: '100%',
                      backgroundColor: 'white',
                      border: '1px solid #555555',
                      width: '100%',
                    },
                    autocompleteItem: {
                      backgroundColor: '#ffffff',
                      padding: '10px',
                      color: '#555555',
                      cursor: 'pointer',
                    },
                    autocompleteItemActive: {
                      backgroundColor: '#fafafa',
                    },
                    googleLogoContainer: {
                      textAlign: 'right',
                      padding: '1px',
                      backgroundColor: '#fafafa',
                    },
                    googleLogoImage: {
                      width: 150,
                    },
                  }}
        />
      </div>
      {touched.Address &&
                errors.Address && (
                  <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                    <p>{errors.Address}</p>
                  </div>
                )}
    </div>

    <button type="submit" className="btn btn-info btn-block">
              save
    </button>
  </Form>
        )}
      />
    </div>
  </div>
);

export default EventsForm;
