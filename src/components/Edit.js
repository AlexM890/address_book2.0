import React from 'react'
import {connect} from 'react-redux'
import {editContact,removeContact} from '../actions/contactActions'
import ContactForm from './ContactForm'

class Edit extends React.Component{
    onSubmit=(updates) => {
        this.props.editContact(this.props.contact.id, updates)
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.removeContact(this.props.contact.id)
        this.props.history.push('/')
    }
    render(){
        console.log(this.props.contact)
        return (
            <div>
                <h3>Edit Contact</h3>
                <ContactForm 
                    onSubmit={this.onSubmit}
                    contact={this.props.contact}
                />
                <button onClick={this.onClick}>Remove Contact</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    contact: state.contacts.find((item) => item.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    editContact: (id,updates) => dispatch(editContact(id,updates)),
    removeContact: (id) => dispatch(removeContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)