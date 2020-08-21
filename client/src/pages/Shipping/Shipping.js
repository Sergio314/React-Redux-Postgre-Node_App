import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ACTIONS from "../../redux/actions/actionTypes";
import ShippingForm from '../../components/ShippingForm/ShippingForm'

const Shipping = (props) => {
    const {total} = props;

    useEffect(() => {
       props.setTotal(window.localStorage.getItem('totalAmount'));
    }, [total]);


    return (
            <div>
                <ShippingForm totalSum={total} />
            </div>
    )
};

const mapStateToProps = state => {
    return state.productsStore;
};

const mapDispatchToProps = dispatch => ({
   setTotal: (sum) => dispatch({type: ACTIONS.SET_TOTAL, data:sum})
});


export default connect(mapStateToProps,mapDispatchToProps)(Shipping);
