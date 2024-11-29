'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import "./form.scss"
import { redirect } from 'next/navigation';

interface FormValues {
    name: string;
    cpf: string;
    age: string;
    phone: string;
    email: string;
    income: string;
    cityState: string;
    employmentStatus: string;
    isNegativado: string;
    negotiateDebt: string;
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter pelo menos 3 caracteres'),
    cpf: Yup.string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido, formato esperado: XXX.XXX.XXX-XX')
        .required('CPF é obrigatório'),
    age: Yup.number()
        .required('Idade é obrigatória')
        .min(18, 'Idade mínima é 18 anos')
        .typeError('Idade deve ser um número'),
    phone: Yup.string()
        .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido, formato esperado: (XX) XXXXX-XXXX')
        .required('Telefone é obrigatório'),
    email: Yup.string()
        .email('Endereço de email inválido')
        .required('Email é obrigatório'),
    income: Yup.string()
        .required('Renda é obrigatória'),
    cityState: Yup.string()
        .required('Cidade e Estado são obrigatórios'),
    employmentStatus: Yup.string()
        .required('Situação empregatícia é obrigatória'),
    isNegativado: Yup.string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Campo obrigatório'),
    negotiateDebt: Yup.string()
        .oneOf(['sim', 'não'], 'Selecione uma opção válida')
        .required('Campo obrigatório'),
});

const generateWhatsAppMessage = (values: FormValues) => {
    return `Novo orçamento recebido:\n\nNome: ${values.name}\nCPF: ${values.cpf}\nIdade: ${values.age}\nTelefone: ${values.phone}\nEmail: ${values.email}\nRenda: ${values.income}\nCidade e Estado: ${values.cityState}\nSituação Empregatícia: ${values.employmentStatus}\nEstá Negativado?: ${values.isNegativado}\nGostaria de negociar dívidas com juros abusivos?: ${values.negotiateDebt}`;
};

const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    const message = generateWhatsAppMessage(values);
    const phoneNumber = '553299986585'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setSubmitting(false);
        resetForm();
        redirect("/")
    }, 400);
};

const FormComponent: React.FC = () => {
    const initialValues: FormValues = {
        name: '',
        cpf: '',
        age: '',
        phone: '',
        email: '',
        income: '',
        cityState: '',
        employmentStatus: '',
        isNegativado: '',
        negotiateDebt: '',
    };

    return (
        <div className="form">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => handleSubmit(values, { setSubmitting, resetForm })}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="formInputs">
                        <div className="input">
                            <label htmlFor="name">Nome Completo:</label>
                            <Field type="text" name="name" placeholder="Entre com seu nome completo" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="cpf">CPF:</label>
                            <Field name="cpf">
                                {({ field }: any) => (
                                    <MaskedInput
                                        {...field}
                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                        placeholder="XXX.XXX.XXX-XX"
                                        onChange={e => setFieldValue('cpf', e.target.value)}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="cpf" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="age">Idade:</label>
                            <Field type="number" name="age" placeholder="Entre com sua idade" />
                            <ErrorMessage name="age" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="phone">Celular/Whatsapp:</label>
                            <Field name="phone">
                                {({ field }: any) => (
                                    <MaskedInput
                                        {...field}
                                        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                        placeholder="(XX) XXXXX-XXXX"
                                        onChange={e => setFieldValue('phone', e.target.value)}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email:</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Entre com seu email"
                            />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="income">Renda:</label>
                            <Field type="text" name="income" placeholder="Entre com sua renda" />
                            <ErrorMessage name="income" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="cityState">Cidade e Estado:</label>
                            <Field type="text" name="cityState" placeholder="Entre com sua cidade e estado" />
                            <ErrorMessage name="cityState" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="employmentStatus">Situação Empregatícia:</label>
                            <Field as="select" name="employmentStatus">
                                <option value="">Selecione...</option>
                                <option value="aposentado">Aposentado</option>
                                <option value="assalariado">Assalariado</option>
                                <option value="autonomo">Autônomo</option>
                                <option value="empresario">Empresário</option>
                                <option value="pensionista">Pensionista</option>
                                <option value="desempregado">Desempregado</option>
                            </Field>
                            <ErrorMessage name="employmentStatus" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="isNegativado">Está Negativado?</label>
                            <Field as="select" name="isNegativado">
                                <option value="">Selecione...</option>
                                <option value="sim">Sim</option>
                                <option value="não">Não</option>
                            </Field>
                            <ErrorMessage name="isNegativado" component="div" className="error" />
                        </div>
                        <div className="input">
                            <label htmlFor="negotiateDebt">Gostaria de negociar dívidas com juros abusivos?</label>
                            <Field as="select" name="negotiateDebt">
                                <option value="">Selecione...</option>
                                <option value="sim">Sim</option>
                                <option value="não">Não</option>
                            </Field>
                            <ErrorMessage name="negotiateDebt" component="div" className="error" />
                        </div>
                        <div className="containerButton">
                            <button type="submit" disabled={isSubmitting} className="buttonElementForm">
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
