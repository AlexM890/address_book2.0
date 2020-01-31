import React from 'react'
import ContactListItem from '../components/ContactListItem'
import filterContacts from '../selectors/selectors'
import {connect} from 'react-redux'
import SortBy from '../components/SortBy'

const ContactsList = (props) => {
    console.log(props.contacts)
    return (
        <div>
            <h1>Contact List</h1>
            <SortBy />
            <div className="row justify-conter-center">
                {
                        props.contacts.map((item) => (
                            <ContactListItem key={item.id} {...item} />
                        ))
                }
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    contacts: filterContacts(state.contacts, state.filters)
})

export default connect(mapStateToProps, undefined)(ContactsList)