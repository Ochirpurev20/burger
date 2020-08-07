import axios from '../../axios-orders';

export const loadOrders = () => {    
    return function(dispatch) { 
        //zahialgiig tataj ehellee gedgiig medegdene
        //eniig huleej avaad spinner ajillaj ehelne
        dispatch(loadOrdersStart())

             axios
            .get('/orders.json')
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
    return function(dispatch) {
        dispatch(saveOrderStart())

        axios
        .post("/orders.json", newOrder)
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