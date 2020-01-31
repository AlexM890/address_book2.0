import uuid from 'uuid'

//Action Functions
export const addContact = ({
    name,
    email
} = {}) => ({
    type: 'ADD_CONTACT',
    contact: {
        id:uuid(),
        name,
        email
    }
})
export const removeContact = (id) => ({
    type: 'REMOVE_CONTACT',
    id
})
export const editContact =(id,updates) => ({
    type:'EDIT_CONTACT',
    id,
    updates
})

export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    contacts
})