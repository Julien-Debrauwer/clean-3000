import customers from '../customers';
import { ADD_VISIT } from '../actions/types';

const initialState = {
    customers,
};


export default function rootReducer(state = initialState, action) {
    const customers = [...state.customers];
    // let isCustomer;
    
    switch (action.type) {
        // case ADDORACCESS_CUSTOMER:

        //     isCustomer = customers.find(function(customer){ return  customer.name === action.payload.name })
        //     if(isCustomer){
        //         addVisit(isCustomer)
        //     }       
        //     return(
        //         console.log(isCustomer)
        //     )   
       
        case ADD_VISIT:
             return{
                 customers : [...state.customers, action.payload]
                
             }
                
                
        default:
            return state;
    }
}
