const initialState = {
    orders: [
        ["-ME0dZas2_knVNcAh_DP",
        {
            dun:6000,
        hayag:{city:"qqqqqqq",name:"qqqqqqq",street:"qqqqqqq"},
        orts:{Bacon:1,Cheese:1,Meat:4,Salad:1}
        }
        ],
        ],
    loading: false,
};

const reducer = (state = initialState, action) => {
    if(action.type ==='LOAD_ACTIONS'){
        return {...state, loading: true}
    }
    return state;
};

export default reducer;
