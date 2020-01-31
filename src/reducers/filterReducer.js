const filterReducerDefaultState = {
    name: '',
    email: '',
    sortBy: 'name'
}
const filterReducer = (state=filterReducerDefaultState,action) => {
    switch(action.type){
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            }
        case 'SORT_BY_EMAIL':
            return {
                ...state,
                sortBy: 'email'
            }
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_EMAIL':
            return {
                ...state,
                name: action.email
            }   
        default:
            return state
    }
}

export default filterReducer