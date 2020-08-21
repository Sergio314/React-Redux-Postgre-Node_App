import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import styles from './Cart.module.sass';
import ProductCard from '../../components/productCard/ProductCard';
import ACTIONS from '../../redux/actions/actionTypes';

function Cart(props) {
    const {products, total} = props;

    const loadMoreHandler = () => {
        props.getAllProducts(products.length);
    };

    useEffect(() => {
       props.getAllProducts(products.length);
    },[]);

    useEffect(() => {
       let sum = 0;
       for (const product of products) {
           sum += product.amount * product.price;
       }
       props.setTotal(sum);
       return () => window.localStorage.setItem('totalAmount', sum)
    }, [products]);
    return (
        <div className={styles.pageContainer}>
            <div >
                {
                    products.length > 0 && products.map( (product) => <ProductCard key={product.id} {...product}/>)
                }
            </div>
            <p>{props.total} €</p>
            <Link to='/shipping'>BUY</Link>
            <div className={styles.loadMore} onClick={loadMoreHandler}>LOAD MORE</div>
        </div>
        );
    }

const mapStateToProps = state => {
  return state.productsStore;
};

const mapDispatchToProps = dispatch => ({
    getAllProducts: (length) => dispatch ({type: ACTIONS.GET_PRODUCTS, data:length}),
    setTotal: (sum) => dispatch({type: ACTIONS.SET_TOTAL, data: sum})
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
