import { ADD_VISIT } from './types';


// export const checkName = name => ({
//     type: ADDORACCESS_CUSTOMER,
//     payload: {
//         id: Date.now(),
//         name,
//         visits: []
//     }
// });

export const addVisit = (name, obs) => ({
    type: ADD_VISIT,
    payload: {
        id: Date.now(),
        name,
        date: new Date(),
        obs
    }
});
