import React from 'react'
import ContactForm from './ContactForm'
import {connect} from 'react-redux'
import {addContact} from '../actions/contactActions'

class Create extends React.Component{
    onSubmit = (contact) => {
        this.props.addContact(contact)
        this.props.history.push('/')
    }
    render(){
        return (
            <div className="container">
                <ContactForm 
                    onSubmit={this.onSubmit}
                />
            </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addContact: (contact) => dispatch(addContact(contact))
})

export default connect(undefined,mapDispatchToProps)(Create)
