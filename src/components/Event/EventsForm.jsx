import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import 'react-datepicker/dist/react-datepicker.css';

import Yup from 'yup';

export const EventsForm = props => (
  <Formik
    initialValues={
      props.evento
        ? {
            Titulo: props.evento.Titulo,
            Descricao: props.evento.Descricao,
            Address: props.evento.Address,
            Data: props.evento.Data,
            Local: props.evento.Local,
          }
        : {
            Titulo: '',
            Descricao: '',
            Address: '',
            Data: moment().format('DD/MM/YY'),
            Local: {},
          }
    }
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
          console.log(submitValues);
          props.submit(submitValues);
        })
        .catch(error => toast.error(error));
    }}
    validationSchema={Yup.object().shape({
      Titulo: Yup.string()
        .min(5, 'O Titulo deve ser de no mínimo 5 caracteres')
        .required('O Titulo é um campo requerido'),
      Description: Yup.string()
        .min(10, 'A descrição deve ser de no mínimo 10 caracteres')
        .max(250, 'A descrição deve ser de no máximo 250 caracteres'),
      Address: Yup.string().required('O endereço é um campo requerido'),
      Data: Yup.date()
        .min(moment(), 'A data deve ser maior que o dia de Hoje')
        .format('DD/MM/YY')
        .required('A data é um campo requerido'),
    })}
    render={({
 touched, errors, values, setFieldValue, setTouched,
}) => (
  <div>
    <Form>
      <div className="box-body">
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
          {touched.Data &&
                errors.Data && (
                  <div style={{ marginTop: 10 }} className="alert alert-danger" role="alert">
                    <p>{errors.Data}</p>
                  </div>
                )}
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
      </div>
      <div className="box-footer">
        <button type="submit" className="btn btn-success btn-block">
              Salvar
        </button>
        {props.remove ? (
          <button type="button" onClick={props.remove} className="btn btn-danger btn-block">
                Remove
          </button>
            ) : (
              ''
            )}
      </div>
    </Form>
  </div>
    )}
  />
);

export default EventsForm;
