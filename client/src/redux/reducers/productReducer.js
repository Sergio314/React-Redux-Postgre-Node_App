import ACTION from '../actions/actionTypes';

const initialState = {
  products: [],
  isFetching:false,
  error: null,
  total: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_PRODUCTS: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }
        case ACTION.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: [...state.products, ...action.data],
                isFetching: false,
                error: null,
            }
        }
        case ACTION.GET_PRODUCTS_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.data,
            }
        }

        case ACTION.DELETE_PRODUCTS:{
            const {id} = action;
            const {products} = state;
            const newProductsList=[];
            for (const product of products) {
                if (product.id === id) {
                    continue;
                }
                newProductsList.push(product);
            }
            return {
                ...state,
                products: newProductsList,
            }
        }
        case ACTION.UPDATE_PRODUCT_AMOUNT:{
            const {data} = action;
            const {products} = state;
            const newProductsList = [];

            for (const product of products) {
                if (product.id === data.id) {
                    product.amount = data.amount
                }
                newProductsList.push(product);
            }
            return {
                ...state,
                products: newProductsList,
            }
        }
        case ACTION.SET_TOTAL:{
            const {data} = action;
            return  {
                ...state,
                total: data,
            }
        }
        case ACTION.CLEAR_ERROR:{
            return {
                ...state,
                error: null,
            }
        }
        default:
            return initialState
    }
}
