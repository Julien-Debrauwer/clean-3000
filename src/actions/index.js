import { ADD_CARD } from './types';

export const addCard = id => ({
    type: ADD_CARD,
    payload: {
        id,
        pizzas: {},
        total: 0,
        paid: false
    }
});
