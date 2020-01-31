import React from 'react'
import { connect } from 'react-redux'
import ContactsList from './ContactsList'

const Home = (props) => (
    <div>
        <div>
            {
             props.contacts.length > 0  && <ContactsList />
            }
        </div>   
    </div>
)

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps)(Home)