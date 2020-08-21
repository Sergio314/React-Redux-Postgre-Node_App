import React from 'react';
import {connect} from 'react-redux';
import styles from "./ProductCard.module.sass";
import ACTIONS from '../../redux/actions/actionTypes';
import { mdiTrashCan } from '@mdi/js';
import Icon from '@mdi/react';
import QtyDisplay from "../QtyDisplay/QtyDisplay";


export const ProductCard = props => {
    const deleteHandler = () => {
        props.deleteProduct(props.id);
    };

    return (
        <div className={styles.productCardContainer}>
            <img src={props.image} alt="product image"/>
        <div className={styles.productCardInfo}>
            <h2>{props.product}</h2>
            <p>{props.description}</p>
        </div>
            <div className={styles.quantityDisplayContainer}>
                 <QtyDisplay amount={props.amount} id={props.id} updateProductAmount={props.updateProductAmount}/>

                <p>{`${props.amount*props.price} €`}</p>
            </div>
            <Icon
                path={mdiTrashCan}
                onClick={deleteHandler}
                size={1}
                className={styles.deleteIcon}
            />
        </div>
         );
};


const mapDispatchToProps = dispatch => ({
    deleteProduct: (id) => dispatch({type: ACTIONS.DELETE_PRODUCTS, id}),
    updateProductAmount: (data) => dispatch({type: ACTIONS.UPDATE_PRODUCT_AMOUNT, data}),
});

export default connect(null, mapDispatchToProps)(ProductCard);
