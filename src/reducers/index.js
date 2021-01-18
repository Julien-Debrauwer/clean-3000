import customers from '../customers';
import { ADD_CARD } from '../actions/types';

const initialState = {
    customers,
};


export default function rootReducer(state = initialState, action) {
    // const customers = [...state.customers];
    
    switch (action.type) {
        case ADD_CARD:
            return state;
                
        default:
            return state;
    }
}
