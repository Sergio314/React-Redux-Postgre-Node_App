import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './ShippingForm.module.sass';
import { required, email, format, length} from "redux-form-validators";
import {connect} from "react-redux";

const submit = () => {
    alert('Payed');
};

const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning }
                     }) => (
    <div className={styles.label}>
        <label>{label}</label>
        <div>
            <input  {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <div className={styles.invalidError}>{error}</div>) ||
                (warning && <div className={styles.invalidError}>{warning}</div>))}
        </div>
    </div>
);

let ShippingForm = (props) => {
    const {
        handleSubmit,
        invalid,
        submitting,
    } = props;
    console.log(props.totalSum);
    return (
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <Field
                name="Name"
                component={renderField}
                type="text"
                placeholder="Name"
                label="Name"
                validate={[required(), length({min:2, max:15})]}
            />

            <Field
                name="Address"
                component={renderField}
                type="text"
                placeholder="Address"
                label="Address"
                validate={[required(), length({min:10, max:40})]}
            />

            <Field
                name="Phone"
                component={renderField}
                type="tel"
                placeholder="+38"
                label="Phone"
                validate={[required(), format({with: /^\+?[0-9]{3}-?[0-9]{6,12}$/, message: 'incorrect phone number format'})]}
            />

            <Field
                name="Email"
                component={renderField}
                type="email"
                placeholder="Email"
                label="E-mail"
                validate={[required(), email()]}
            />
            <div className={styles.select}>
                <label>Shipping options</label>
                <div>
                    <Field name="Shipping options" component="select" >
                        <option value="0" >Free shipping</option>
                        <option value="9.99" disabled={props.totalSum > 300}>Express shipping</option>
                        <option value="19.99" disabled={props.totalSum > 300}>Courier shipping</option>
                    </Field>
                </div>
            </div>
            <button type="submit" disabled={invalid || submitting} className={styles.payButton}>
                PAY
            </button>
        </form>
    )
};

ShippingForm = reduxForm({
    form: 'shippingForm',
    enableReinitialize:false
})(ShippingForm);

ShippingForm = connect(
    state => ({
        initialValues: {"Shipping options": state.productsStore.total > 300 ? '0' :  '19.99'}
    }),
)(ShippingForm);

export default ShippingForm;


