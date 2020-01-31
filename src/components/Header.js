import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => (
    <header className="mb-3 d-column">
        <NavLink to="/" className="h1">The Address Book</NavLink>
        <NavLink to="/Create" className="btn btn-primary">Create Contact</NavLink>
    </header>
)

export default Header