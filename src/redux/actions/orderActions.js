import axios from '../../axios-orders';

export const loadOrders = (userId) => {    
    return function(dispatch, getState) { 
        //zahialgiig tataj ehellee gedgiig medegdene
        //eniig huleej avaad spinner ajillaj ehelne
        dispatch(loadOrdersStart())
        const token = getState().signupLoginReducer.token

             axios
            .get(`orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then((res) => {
                dispatch(loadOrdersSuccess(Object.entries(res.data).reverse() )) 
                // this.setState({ orders: Object.entries(res.data).reverse() });
            })
            .catch((err) => {
                dispatch(loadOrdersError(err))
            })
    }
}

export const loadOrdersStart = () => {
    return {
        type: 'LOAD_ORDER_START'
    }
}

export const loadOrdersSuccess = (loadedOrders) => {
    return {
        type: 'LOAD_ORDER_SUCCESS',
        orders: loadedOrders
    }
}

export const loadOrdersError = (error) => {
    return {
        type: 'LOAD_ORDER_ERROR',
        error   
    }
}

export const saveOrder = (newOrder) => {
    return function(dispatch, getState) {
        dispatch(saveOrderStart())

        const token = getState().signupLoginReducer.token
        axios
        .post(`/orders.json?auth=${token}`, newOrder)
        .then((res) => {
            dispatch(saveOrderSuccess())            
        })
        .catch((err) => {
            dispatch(saveOrderError(err))
        })
    }
}

export const saveOrderStart = () => {
    return {
        type: 'SAVE_ORDER_START' 
    }
}

export const saveOrderSuccess = () => {
    return {
        type: 'SAVE_ORDER_SUCCESS' 
    }
}

export const saveOrderError = (error) => {
    return {
        type: 'SAVE_ORDER_ERROR',
        error 
    }
}