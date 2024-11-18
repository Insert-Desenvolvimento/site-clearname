'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from "./component.module.css"

interface FormValues {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    debtAmount: string;
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: Yup.string()
        .email('Endereço de email inválido')
        .required('Email é obrigatório'),
    cpf: Yup.string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido, formato esperado: XXX.XXX.XXX-XX')
        .required('CPF é obrigatório'),
    phone: Yup.string()
        .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido, formato esperado: (XX) XXXXX-XXXX')
        .required('Telefone é obrigatório'),
    debtAmount: Yup.number()
        .required('Valor estimado da dívida é obrigatório')
        .min(0, 'Valor estimado da dívida deve ser positivo')
        .typeError('Valor estimado da dívida deve ser um número'),
});


const FormComponent: React.FC = () => {
    const initialValues: FormValues = {
        name: '',
        email: '',
        cpf: '',
        phone: '',
        debtAmount: '',
    };

    return (
        <div className={styles.form}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.formInputs}>
                        <div className={styles.input}>
                            <label htmlFor="name">Nome:</label>
                            <Field type="text" name="name" placeholder="Entre com seu nome completo" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" name="email" placeholder="Entre com seu email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="cpf">CPF:</label>
                            <Field type="text" name="cpf" placeholder="Entre com seu cpf" />
                            <ErrorMessage name="cpf" component="div" className="error" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="phone">Telefone:</label>
                            <Field type="text" name="phone" placeholder="Entre com seu telefone" />
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="debtAmount">Valor Estimado da Dívida:</label>
                            <Field type="text" name="debtAmount" placeholder="Entre com o valor aproximado da dívida" />
                            <ErrorMessage name="debtAmount" component="div" className="error" />
                        </div>
                        <div className={styles.containerButton}>
                            <button type="submit" disabled={isSubmitting} className={styles.buttonElementForm}>
                                Enviar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormComponent;
