//Action functions
export const sortByName = () => ({
    type: 'SORT_BY_NAME'
})
export const sortByEmail = () => ({
    type: 'SORT_BY_EMAIL'
})
export const setName =(name='')=>({
    type: 'SET_NAME',
    name   
})
export const setEmail =(email='')=>({
    type: 'SET_EMAIL',
    email  
})

