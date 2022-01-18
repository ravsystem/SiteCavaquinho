
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { CountryService } from '../../service/CountryService';
import './Cadastro.css';

export const Cadastro = () => {

    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const validate = (data) => {

        let errors = {};

        if (!data.name) {
            errors.name = 'O nome é obrigatório.';
        }

        if (!data.email) {
            errors.email = 'O e-mail é obrigatório.';
        }

        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Endereço de email invalido. E.g. example@email.com';
        }

        if (!data.password) {
            errors.password = 'Senha requerida.';
        }

        if (!data.accept) {
            errors.accept = 'Você precisa concordar com os termos e condições.';
        }

        return errors;
    };

    const onSubmit = (data, form) => {

        setFormData(data);
        setShowMessage(true);

        form.restart();
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);

    const getFormErrorMessage = (meta) => {

        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter =
    <div className="p-d-flex p-jc-center">
        <Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false) }/>
    </div>;

    const passwordHeader = 
    <h6>Escolha uma senha</h6>;

    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Sugestões</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>Pelo menos uma minúscula</li>
                <li>Pelo menos uma maiúscula</li>
                <li>Pelo menos um numérico</li>
                <li>Mínimo de 8 caracteres</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="col-12">
            <div className="card">
                <div className="grid">
                    <div className="col-5 flex align-items-center justify-content-center">
                        <div className="p-fluid">
                            <h5 className="p-text-center">Login</h5>
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="username" type="text" />
                                    <label htmlFor="username">Usuario</label>
                                </span>
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Password id="password" type="password" />
                                    <label htmlFor="password">Senha</label>
                                </span>
                            </div>

                            <Button label="Login"></Button>
                        </div>
                    </div>

                    <div className="col-1">
                        <Divider layout="vertical">
                            <b>OU</b>
                        </Divider>
                    </div>

                    <div className="form-demo">
                        <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                            <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                                <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                                <h5>Registro bem-sucedido!</h5>
                                <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                                    Sua conta está registrada em nome <b>{formData.name}</b> ; será válido nos próximos 30 dias sem ativação. por favor, verifique <b>{formData.email}</b> para instruções de ativação.
                                </p>
                            </div>
                        </Dialog>

                    <div className="p-d-flex p-jc-center">
                        <div className="p-fluid">                   
                            <h5 className="p-text-center">Registro</h5>
                            <Form onSubmit={onSubmit} initialValues={{ 
                                name:       '', 
                                email:      '', 
                                password:   '', 
                                date:       null, 
                                country:    null, 
                                accept:     false }}
                                validate={validate} render={({ handleSubmit }) => (
                            
                                <form onSubmit={handleSubmit} className="p-fluid">
                                    <div className="field">
                                        <Field name="name" render={({ input, meta }) => (
                                            <div className="p-field">
                                                <span className="p-float-label">
                                                    <InputText id="name" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                    <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Nome*</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                    </div>

                                    <div className="field">
                                        <Field name="email" render={({ input, meta }) => (
                                            <div className="p-field">
                                                <span className="p-float-label p-input-icon-right">
                                                    <i className="pi pi-envelope" />
                                                    <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                    </div>

                                    <div className="field">
                                        <Field name="password" render={({ input, meta }) => (
                                            <div className="p-field">
                                                <span className="p-float-label">
                                                    <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                                    <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Senha*</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                    </div>

                                    <div className="field">
                                        <Field name="date" render={({ input }) => (
                                            <div className="p-field">
                                                <span className="p-float-label">
                                                    <Calendar id="date" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                                    <label htmlFor="date">Data de Nascimento</label>
                                                </span>
                                            </div>
                                        )} />
                                    </div>

                                    <div className="field">
                                        <Field name="country" render={({ input }) => (
                                            <div className="p-field">
                                                <span className="p-float-label">
                                                <Dropdown id="country" {...input} options={countries} optionLabel="name" />
                                                <label htmlFor="country">Pais</label>
                                            </span>
                                        </div>
                                        )} />
                                    </div>

                                    <div className="field">
                                        <Field name="accept" type="checkbox" render={({ input, meta }) => (
                                            <div className="p-field-checkbox">
                                                <Checkbox inputId="accept" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Eu concordo com os Termos e Condições*</label>
                                            </div>
                                        )} />
                                    </div>

                                    <Button type="submit" label="Submit" className="p-mt-2" />
                                </form>
                            )} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}