import {FETCH_USERS} from './types';

export const fetchUsers = () => dispatch =>{
    fetch('https://api.randomuser.me/?nat=ch&results=50')
    .then(res => res.json())
    
    .then(users => dispatch({
        type:FETCH_USERS,
        payload:users
    }));      
}