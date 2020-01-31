import React from 'react'
import {Link} from 'react-router-dom'
const ContactListItem = ({id, name, email}) => (
    <div className="card col-3">
        <Link to={`/Edit/${id}`}><h3 className="card-header">{name}</h3></Link>
        
        <ul className="card-body">
            <li>Email: {email}</li>
        </ul>
        <div className="card-footer row justify-content-center">
            <button className="form-control">Edit</button>
            <button className="form-control">Remove</button>
        </div>
    </div>
)

export default ContactListItem