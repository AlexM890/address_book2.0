import React from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions/contactActions'

class ContactForm extends React.Component{
    state ={
        name: this.props.contact ? this.props.contact.name: '',
        email: this.props.contact ? this.props.contact.email: '',
        eError: undefined,
        nError: undefined
    }
    // count = 0
    onNameChange = (e) => {
        e.persist()
        this.setState(() => ({name:e.target.value}))
   
    }
    onEmailChange = (e) => {
        e.persist()
        this.setState(() => ({email:e.target.value}))
    }
    validate = (e) =>{
        e.preventDefault()
        const error = {
            eError:undefined,
            nError: undefined
        }
        if(!this.state.name){
            error.nError = 'Please input a name'
            // this.count++
        }else{
             error.nError = undefined
        }

        if(!this.state.email || this.state.email.indexOf('@') < 0){
            error.eError = 'Please input a valid email'
            // this.count++
        }else{
            error.eError = undefined
        }

        if(!error.nError && !error.eError){
            this.props.onSubmit({
                name:this.state.name,
                email:this.state.email
            })
        }
        this.setState(() => ({
            nError:error.nError,
            eError: error.eError
        }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.validate} className="row justify-content-center" >
                    <div className="d-column col-5">
                        <h4>Name</h4>
                        <input type="text" className="form-control" placeholder="Name..."  onChange={this.onNameChange} value={this.state.name}/>
                        {
                            this.state.nError && <p className="bg-danger pl-3 text-light">{this.state.nError}</p>
                        }
                    </div>
                    <div className="d-column col-5">
                        <h4>Email Address</h4>
                        <input type="email" className="form-control" placeholder="Email Address..." onChange={this.onEmailChange} value={this.state.email}/>
                        {
                            this.state.eError && <p className="bg-danger pl-3 text-light">{this.state.eError}</p>
                        }
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
    addContact: (contact) => dispatch(addContact(contact))
})

export default connect(undefined,mapDispatchToProps)(ContactForm)
